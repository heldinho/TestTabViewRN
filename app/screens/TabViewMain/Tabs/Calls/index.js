import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import DocumentScanner from 'react-native-document-scanner';

export default function Calls() {
  const [count, setCount] = React.useState(0);
  const [state, setState] = React.useState({
    image: '',
    initialImage: null,
    rectangleCoordinates: null,
    stableCounter: null,
    lastDetectionType: null,
  });

  React.useEffect(() => {
    fnRequestCameraPermission();
  }, []);

  const fnPress = () => {
    setCount(prev => prev + 1);
  };

  const fnRequestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Permissão de Câmera',
        message: 'O App precisa de acesso à câmera.',
        buttonNeutral: 'Pergunte-me depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Atenção!', 'Você pode usar a Câmera');
    } else {
      Alert.alert('Atenção!', 'Permissão de Câmera negada');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
      <View style={{ width: '90%', alignSelf: 'center' }}>
        <TextInput value={String(count)} />
        <TouchableWithoutFeedback
          onPress={fnPress}
          onPressIn={() => Keyboard.dismiss()}
        >
          <View
            style={{
              backgroundColor: '#fff',
              padding: 25,
              borderRadius: 10,
              marginBottom: 20,
              elevation: 2,
            }}
          >
            <Text style={{ color: '#444', fontSize: 18, textAlign: 'center' }}>
              Button Add Count++
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <DocumentScanner
          useBase64
          onPictureTaken={data =>
            setState({
              image: data.croppedImage,
              initialImage: data.initialImage,
              rectangleCoordinates: data.rectangleCoordinates,
            })
          }
          overlayColor="rgba(255,130,0, 0.7)"
          enableTorch={false}
          brightness={0.3}
          saturation={1}
          contrast={1.1}
          quality={0.5}
          onRectangleDetect={({ stableCounter, lastDetectionType }) =>
            setState({ stableCounter, lastDetectionType })
          }
          detectionCountBeforeCapture={5}
          detectionRefreshRateInMS={50}
        />
        <Image
          source={{ uri: `data:image/jpeg;base64,${state.image}` }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
