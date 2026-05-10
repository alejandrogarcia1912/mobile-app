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

type Errors = {
  firstname?: boolean;
  lastname?: boolean;
  phone?: boolean;
  address?: boolean;
  country?: boolean;
  email?: boolean;
  password?: boolean;
};

type RegisterScreenProps = {
  onLoginPress: () => void;
  onRegisterSuccess: (name: string) => void;
};

const RegisterScreen = ({
  onLoginPress,
  onRegisterSuccess,
}: RegisterScreenProps) => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<Errors>({});

  const handleRegister = () => {

    let newErrors: Errors = {};

    if (firstname.trim() === '') {
      newErrors.firstname = true;
    }

    if (lastname.trim() === '') {
      newErrors.lastname = true;
    }

    if (phone.trim() === '') {
      newErrors.phone = true;
    }

    if (address.trim() === '') {
      newErrors.address = true;
    }

    if (country.trim() === '') {
      newErrors.country = true;
    }

    if (email.trim() === '') {
      newErrors.email = true;
    }

    if (password.trim() === '') {
      newErrors.password = true;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {

      Alert.alert(
        'Incomplete Fields',
        'Please complete all fields'
      );

      return;
    }

    Alert.alert(
      'Success',
      'Account created successfully'
    );

    onRegisterSuccess(`${firstname.trim()} ${lastname.trim()}`);

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
              Create your account
            </Text>

          </View>

          {/* CARD */}

          <View style={styles.card}>

            <Text style={styles.title}>
              Register
            </Text>

            {/* FIRST NAME */}

            <Text style={styles.label}>
              First Name
            </Text>

            <TextInput
              style={[
                styles.input,
                errors.firstname && styles.inputError
              ]}
              placeholder="Enter your first name"
              placeholderTextColor="#71717A"
              value={firstname}
              onChangeText={(text) => {
                setFirstname(text);
                setErrors({
                  ...errors,
                  firstname: false,
                });
              }}
            />

            {
              errors.firstname && (
                <Text style={styles.errorText}>
                  First name is required
                </Text>
              )
            }

            {/* LAST NAME */}

            <Text style={styles.label}>
              Last Name
            </Text>

            <TextInput
              style={[
                styles.input,
                errors.lastname && styles.inputError
              ]}
              placeholder="Enter your last name"
              placeholderTextColor="#71717A"
              value={lastname}
              onChangeText={(text) => {
                setLastname(text);
                setErrors({
                  ...errors,
                  lastname: false,
                });
              }}
            />

            {
              errors.lastname && (
                <Text style={styles.errorText}>
                  Last name is required
                </Text>
              )
            }

            {/* PHONE */}

            <Text style={styles.label}>
              Mobile Phone
            </Text>

            <TextInput
              style={[
                styles.input,
                errors.phone && styles.inputError
              ]}
              placeholder="Enter your phone"
              placeholderTextColor="#71717A"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                setErrors({
                  ...errors,
                  phone: false,
                });
              }}
            />

            {
              errors.phone && (
                <Text style={styles.errorText}>
                  Phone is required
                </Text>
              )
            }

            {/* ADDRESS */}

            <Text style={styles.label}>
              Address
            </Text>

            <TextInput
              style={[
                styles.input,
                errors.address && styles.inputError
              ]}
              placeholder="Enter your address"
              placeholderTextColor="#71717A"
              value={address}
              onChangeText={(text) => {
                setAddress(text);
                setErrors({
                  ...errors,
                  address: false,
                });
              }}
            />

            {
              errors.address && (
                <Text style={styles.errorText}>
                  Address is required
                </Text>
              )
            }

            {/* COUNTRY */}

            <Text style={styles.label}>
              Country
            </Text>

            <TextInput
              style={[
                styles.input,
                errors.country && styles.inputError
              ]}
              placeholder="Enter your country"
              placeholderTextColor="#71717A"
              value={country}
              onChangeText={(text) => {
                setCountry(text);
                setErrors({
                  ...errors,
                  country: false,
                });
              }}
            />

            {
              errors.country && (
                <Text style={styles.errorText}>
                  Country is required
                </Text>
              )
            }

            {/* EMAIL */}

            <Text style={styles.label}>
              Email
            </Text>

            <TextInput
              style={[
                styles.input,
                errors.email && styles.inputError
              ]}
              placeholder="Enter your email"
              placeholderTextColor="#71717A"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors({
                  ...errors,
                  email: false,
                });
              }}
            />

            {
              errors.email && (
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
                errors.password && styles.inputError
              ]}
              placeholder="Enter your password"
              placeholderTextColor="#71717A"
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors({
                  ...errors,
                  password: false,
                });
              }}
            />

            {
              errors.password && (
                <Text style={styles.errorText}>
                  Password is required
                </Text>
              )
            }

            {/* SIGN UP BUTTON */}

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >

              <Text style={styles.registerButtonText}>
                Sign Up
              </Text>

            </TouchableOpacity>

            {/* LOGIN */}

            <TouchableOpacity
              onPress={onLoginPress}
            >

              <Text style={styles.loginText}>
                I already have an account
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>

  );

};

export default RegisterScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
    paddingVertical: 40,
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
    marginBottom: 8,
  },

  inputError: {
    borderColor: '#EF4444',
  },

  errorText: {
    color: '#EF4444',
    marginBottom: 15,
    fontSize: 13,
  },

  registerButton: {
    backgroundColor: '#D946EF',
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 15,
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  loginText: {
    color: '#D946EF',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
    fontWeight: '600',
  },

});