import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import CameraView from './pages/Camera';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Feather name="home" size={20} color={color} /> }} name="Home" component={Home} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Feather name="camera" size={20} color={color} /> }} name="Camera" component={CameraView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}