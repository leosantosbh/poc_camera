import { Camera } from 'expo-camera';
import React from 'react';
import { View } from 'react-native';

const CameraView: React.FC = () => {
  
  return (
    <View style={{ flex: 1}}>
      <Camera style={{ flex: 1}}/>
    </View>
  );
}

export default CameraView;