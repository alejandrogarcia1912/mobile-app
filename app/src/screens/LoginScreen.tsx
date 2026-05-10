import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

type LoginScreenProps = {
  onLoginSuccess: (name: string) => void;
  onRegisterPress: () => void;
};

const LoginScreen = ({ onLoginSuccess, onRegisterPress }: LoginScreenProps) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {

    let valid = true;

    if (email.trim() === '') {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (password.trim() === '') {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (!valid) {
      Alert.alert(
        'Campos incompletos',
        'Debes llenar todos los campos'
      );
      return;
    }

    onLoginSuccess(email.trim());
  };

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >

          {/* LOGO */}

          <View style={styles.logoContainer}>

            <Text style={styles.logo}>
              NovaBank
            </Text>

            <Text style={styles.subtitle}>
              Secure Mobile Banking
            </Text>

          </View>

          {/* CARD */}

          <View style={styles.card}>

            <Text style={styles.title}>
              Welcome Back
            </Text>

            {/* EMAIL */}

            <Text style={styles.label}>
              Email
            </Text>

            <TextInput
              style={[
                styles.input,
                emailError && styles.inputError
              ]}
              placeholder="Enter your email"
              placeholderTextColor="#71717A"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError(false);
              }}
            />

            {
              emailError && (
                <Text style={styles.errorText}>
                  Email is required
                </Text>
              )
            }

            {/* PASSWORD */}

            <Text style={styles.label}>
              Password
            </Text>

            <TextInput
              style={[
                styles.input,
                passwordError && styles.inputError
              ]}
              placeholder="Enter your password"
              placeholderTextColor="#71717A"
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError(false);
              }}
            />

            {
              passwordError && (
                <Text style={styles.errorText}>
                  Password is required
                </Text>
              )
            }

            {/* LOGIN BUTTON */}

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
            >

              <Text style={styles.loginButtonText}>
                Login
              </Text>

            </TouchableOpacity>

            {/* REGISTER */}

            <TouchableOpacity
              onPress={onRegisterPress}
            >

              <Text style={styles.registerText}>
                I don't have an account
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>

  );

};

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  subtitle: {
    color: '#A1A1AA',
    marginTop: 10,
    fontSize: 15,
  },

  card: {
    backgroundColor: '#111111',
    borderRadius: 28,
    padding: 25,
    borderWidth: 1,
    borderColor: '#27272A',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  label: {
    color: '#D4D4D8',
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#18181B',
    borderWidth: 1,
    borderColor: '#27272A',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },

  inputError: {
    borderColor: '#EF4444',
  },

  errorText: {
    color: '#EF4444',
    marginBottom: 15,
    fontSize: 13,
  },

  loginButton: {
    backgroundColor: '#D946EF',
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 15,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  registerText: {
    color: '#D946EF',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
    fontWeight: '600',
  },

});