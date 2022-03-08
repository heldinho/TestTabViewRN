import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './styles';

export default function SlideOnboarding() {
  return (
    <View>
      <Text>index</Text>
      <TouchableOpacity>
        <Text>Teste de TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight>
        <Text>Teste de TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
}
