import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    runOnJS,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

const BUTTON_HEIGHT = 100;
const BUTTON_WIDTH = 370;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS - 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;
const END_POSITION = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

const SwipeButton = ({ onToggle }) => {
    const navigation = useNavigation();
    const onLeft = useSharedValue(true);
    const position = useSharedValue(0);
    const [isFirstTime, setIsFirstTime] = useState(true);

    useEffect(() => {
        checkFirstTimeUser();
    }, []);

    const checkFirstTimeUser = async () => {
        try {
            const value = await AsyncStorage.getItem('hasSeenOnboarding');
            if (value !== null) {
                setIsFirstTime(false);
                // If not first time, directly navigate to main screen
                navigation.replace('login'); // Replace with your main screen name
            }
        } catch (error) {
            console.error('Error checking first time user:', error);
        }
    };

    const handleComplete = async () => {
        try {
            // Mark that user has seen onboarding
            await AsyncStorage.setItem('hasSeenOnboarding', 'true');
            navigation.replace('login'); // Replace with your main screen name
        } catch (error) {
            console.error('Error saving first time user status:', error);
        }
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
    }));

    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
            const newPosition = onLeft.value ? e.translationX : END_POSITION + e.translationX;
            position.value = Math.max(0, Math.min(newPosition, END_POSITION));
        })
        .onEnd((e) => {
            if (position.value > END_POSITION / 2) {
                position.value = withTiming(END_POSITION, { duration: 100 });
                onLeft.value = false;
                onToggle?.(true);
                runOnJS(handleComplete)();
            } else {
                position.value = withTiming(0, { duration: 100 });
                onLeft.value = true;
                onToggle?.(false);
            }
        });

    if (!isFirstTime) return null;

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleText}>Swipe to continue  </Text>
            <GestureDetector gesture={panGesture}>
                <Animated.View style={[styles.swipeable, animatedStyle]} />
            </GestureDetector>
        </View>
    )
}

export default SwipeButton

const styles = StyleSheet.create({
    mainContainer: {
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        padding: BUTTON_PADDING,
        backgroundColor: "#FFD101",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: BUTTON_HEIGHT,
    },
    swipeable: {
        height: SWIPEABLE_DIMENSIONS,
        width: SWIPEABLE_DIMENSIONS,
        borderRadius: SWIPEABLE_DIMENSIONS,
        backgroundColor: 'white',
        position: 'absolute',
        left: BUTTON_PADDING,
    },
    titleText: {
        position: 'absolute',
        alignSelf: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
    }
});