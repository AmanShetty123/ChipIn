import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login pressed');
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log('Google login pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* Header Image */}
          <Image
            source={require('../../assets/login.png')} // Make sure to add your own illustration
            style={styles.headerImage}
            resizeMode="contain"
          />

          {/* Login Text */}
          <Text style={styles.title}>Login</Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              {/* <Image
                source={require('./assets/email-icon.png')} // Add your email icon
                style={styles.inputIcon}
              /> */}
              <TextInput
                style={styles.input}
                placeholder="Email ID"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputWrapper}>
              {/* <Image
                source={require('./assets/password-icon.png')} // Add your password icon
                style={styles.inputIcon}
              /> */}
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* OR Divider */}
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>

          {/* Google Login Button */}
          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
            {/* <Image
              source={require('./assets/google-icon.png')} // Add your Google icon
              style={styles.googleIcon}
            /> */}
            <Text style={styles.googleButtonText}>Login with Google</Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>New to Logistics? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  headerImage: {
    width: '100%',
    height: 300,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 24,
  },
  inputContainer: {
    gap: 16,
    marginBottom: 24,
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    paddingHorizontal: 40,
    backgroundColor: '#F7F7F7',
    fontSize: 16,
  },
  inputIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 12,
    top: 14,
  },
  forgotPassword: {
    color: '#0066FF',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  loginButton: {
    backgroundColor: '#0066FF',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  orText: {
    color: '#8E8E8E',
    paddingHorizontal: 16,
    fontSize: 14,
  },
  googleButton: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  googleButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#8E8E8E',
    fontSize: 14,
  },
  registerLink: {
    color: '#0066FF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LoginScreen;