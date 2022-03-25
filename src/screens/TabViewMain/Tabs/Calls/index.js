import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableOpacity,
  Keyboard,
  Touchable,
  Platform,
} from 'react-native';
import { translate, enumType } from '../../../../locales';
import i18n from 'i18n-js';
import { fn } from '../../../../utils';
import { useSelector } from 'react-redux';

export default function Calls() {
  const { locale } = useSelector(state => state.language);
  const [count, setCount] = React.useState(0);

  i18n.locale = enumType[locale];
  i18n.defaultLocale = enumType[locale];

  const fnPress = () => {
    setCount(prev => prev + 1);
  };

  const Touchable =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

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
              {translate('button_add_count')}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={() => fn('setLocale', 'br')}
          style={{
            backgroundColor: '#fff',
            padding: 25,
            borderRadius: 10,
            marginBottom: 20,
            elevation: 2,
          }}
        >
          <View>
            <Text style={{ color: '#444', fontSize: 18, textAlign: 'center' }}>
              Portugues
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => fn('setLocale', 'en')}
          style={{
            backgroundColor: '#fff',
            padding: 25,
            borderRadius: 10,
            marginBottom: 20,
            elevation: 2,
          }}
        >
          <View>
            <Text style={{ color: '#444', fontSize: 18, textAlign: 'center' }}>
              Ingles
            </Text>
          </View>
        </TouchableOpacity>
        <Touchable style={{ borderRadius: 100 }}>
          <View style={styles.button}>
            <Text style={styles.text}>Teste</Text>
          </View>
        </Touchable>
      </View>
    </View>
  );
}

const styles = {
  button: {
    elevation: 4,
    borderRadius: 100,
    backgroundColor: '#2196F3',
  },
  text: {
    textAlign: 'center',
    margin: 8,
    color: 'white',
    fontWeight: '500',
  },
};
