import React from 'react';

import {
  ActivityIndicator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SplashScreen = () => {

  return (

    <View style={styles.container}>

      <StatusBar barStyle="light-content" />

      {/* LOGO */}

      <Image
        source={require('../images/logo.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* NAME */}

      <Text style={styles.title}>
        NovaBank
      </Text>

      {/* SUBTITLE */}

      <Text style={styles.subtitle}>
        Tu banco, siempre contigo
      </Text>

      {/* LOADING */}

      <ActivityIndicator
        size="large"
        color="#D946EF"
        style={styles.loader}
      />

    </View>

  );

};

export default SplashScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  subtitle: {
    color: '#A1A1AA',
    fontSize: 16,
    marginTop: 10,
    letterSpacing: 1,
  },

  loader: {
    marginTop: 45,
  },

});