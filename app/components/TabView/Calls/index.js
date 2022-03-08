import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function Calls() {
  const [count, setCount] = React.useState(0);

  const fnPress = () => {
    setCount(prev => prev + 1);
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
      </View>
    </View>
  );
}
