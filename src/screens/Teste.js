import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {
  fixedWidth as fw,
  fixedHeight as fh,
  percentageWidth as pw,
  percentageHeight as ph,
} from 'react-native-responsive-dimension';

export default function Teste() {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <ScrollView
          contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}
        >
          {[...Array(100)].map((_, index) => (
            <Text key={index} style={styles.myText}>
              Login
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderWidth: 0,
    borderColor: 'red',
  },
  textWrapper: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    elevation: 0,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  myText: {
    fontSize: fw(18),
  },
});
