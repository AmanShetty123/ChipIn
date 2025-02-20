import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import React from "react";
import SwipeButton from "../components/SwipeButton";

const {width, height} = Dimensions.get('window');
const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Image
        style={styles.image}
        source={require("../../assets/friends.jpg")}
      />
      <Text style={styles.mainText}>
        Ready to <Text style={styles.boldText}>ChipIn </Text>
        with ease?
      </Text>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: height * 0.03,
          left:width * 0.05
        }}
      >
        <SwipeButton />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    height: height * 0.55,
    width: width * 0.9
  },
  mainText: {
    fontSize: 64,
    marginLeft: width * 0.1,
  },
  boldText: {
    fontWeight: "bold",
    color: '#FFD101',
    textShadowColor: "black", // Outline color
    textShadowOffset: { width: 4, height: 4 }, // Shadow position
    textShadowRadius: 10, // Spread of the shadow
  },
});
