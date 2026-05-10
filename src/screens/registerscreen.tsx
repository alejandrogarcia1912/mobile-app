import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

const RegisterScreen = ({ onLoginPress }: any) => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Register pressed');
  };

  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

        <StatusBar barStyle="light-content" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          keyboardShouldPersistTaps="handled"
        >

          {/* HEADER */}
          <View style={styles.header}>

            <Text style={styles.bankName}>
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

            {/* FIRSTNAME */}
            <Text style={styles.label}>Firstname</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your firstname"
              value={firstname}
              onChangeText={setFirstname}
            />

            {/* LASTNAME */}
            <Text style={styles.label}>Lastname</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your lastname"
              value={lastname}
              onChangeText={setLastname}
            />

            {/* PHONE */}
            <Text style={styles.label}>Mobile phone</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your mobile phone"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />

            {/* ADDRESS */}
            <Text style={styles.label}>Address</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={address}
              onChangeText={setAddress}
            />

            {/* COUNTRY */}
            <Text style={styles.label}>Country</Text>

            <View style={styles.pickerContainer}>

              <Picker
                selectedValue={country}
                onValueChange={(itemValue: React.SetStateAction<string>) => setCountry(itemValue)}
                style={styles.picker}
              >

                <Picker.Item
                  label="Select your country"
                  value=""
                />

                <Picker.Item
                  label="Colombia"
                  value="Colombia"
                />

                <Picker.Item
                  label="United States"
                  value="USA"
                />

                <Picker.Item
                  label="Mexico"
                  value="Mexico"
                />

                <Picker.Item
                  label="Spain"
                  value="Spain"
                />

                <Picker.Item
                  label="Argentina"
                  value="Argentina"
                />

              </Picker>

            </View>

            {/* EMAIL */}
            <Text style={styles.label}>Email</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            {/* PASSWORD */}
            <Text style={styles.label}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {/* BUTTON */}
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >

              <Text style={styles.registerButtonText}>
                Sign up
              </Text>

            </TouchableOpacity>

            {/* LOGIN LINK */}
            <TouchableOpacity onPress={onLoginPress}>

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
    backgroundColor: '#0F172A',
  },

  header: {
    paddingHorizontal: 30,
    marginTop: 60,
    marginBottom: 30,
  },

  bankName: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#CBD5E1',
    marginTop: 10,
    fontSize: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    minHeight: 950,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 35,
  },

  label: {
    color: '#334155',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 22,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  pickerContainer: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },

  picker: {
    color: '#0F172A',
  },

  registerButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  loginText: {
    textAlign: 'center',
    marginTop: 28,
    color: '#2563EB',
    fontSize: 15,
    fontWeight: '600',
  },

});