import React, { useEffect, useState } from 'react';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';

const Index = () => {

  const [loading, setLoading] = useState(true);

  const [screen, setScreen] = useState('login');

  const [username, setUsername] = useState('');

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);

  }, []);

  // SPLASH
  if (loading) {
    return <SplashScreen />;
  }

  // HOME
  if (screen === 'home') {

    return (
      <HomeScreen
        username={username}
      />
    );

  }

  // REGISTER
  if (screen === 'register') {

    return (

      <RegisterScreen
        onLoginPress={() => setScreen('login')}
        onRegisterSuccess={(name: string) => {
          setUsername(name);
          setScreen('home');
        }}
      />

    );

  }

  // LOGIN
  return (

    <LoginScreen
      onRegisterPress={() => setScreen('register')}
      onLoginSuccess={(name: string) => {
        setUsername(name);
        setScreen('home');
      }}
    />

  );

};

export default Index;