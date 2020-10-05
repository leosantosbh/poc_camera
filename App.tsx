import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor='#f5f5f5' />
      <Routes />
    </>
  );
}

export default App;

