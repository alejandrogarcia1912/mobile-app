import React, { useState } from 'react';

import LoginScreen from '../src/screens/loginscreen';
import RegisterScreen from '../src/screens/registerscreen';

const Index = () => {

  const [showRegister, setShowRegister] = useState(false);

  return (

    <>
      {
        showRegister
          ? (
              <RegisterScreen
                onLoginPress={() => setShowRegister(false)}
              />
            )
          : (
              <LoginScreen
                onRegisterPress={() => setShowRegister(true)}
              />
            )
      }
    </>

  );
};

export default Index;