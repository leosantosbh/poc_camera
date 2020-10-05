import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Platform, Alert } from 'react-native';

const CameraView: React.FC = () => {
  const ifFocused = useIsFocused();
  const [scanned, setScanned] = useState(false);

  const [hasPermission, setHasPermission] = useState<string | null | boolean>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    if (Platform.OS === 'web') {
      setHasPermission(true);
    } else {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status);
      })();
    }
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (!hasPermission && hasPermission !== "granted") {
    return <Text>No access to camera</Text>;
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert('Código', data, [
      { text: "OK", onPress: () => setScanned(false) }
    ],
    { cancelable: false } );
  };
  
  return ifFocused && (
    <View style={{ flex: 1}}>
      <Camera 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}  
        style={{ flex: 1}}
        type={type}
        ratio='16:9'
      />
    </View>
  );
}

export default CameraView;