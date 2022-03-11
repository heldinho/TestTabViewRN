import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default function Status() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json));
    })();
  }, []);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fcfcfc' }}
      contentContainerStyle={{ paddingVertical: 20 }}
    >
      {data.map(item => (
        <View
          key={item.id}
          style={{ width: '90%', alignSelf: 'center', marginBottom: 20 }}
        >
          <Text
            style={{
              color: '#444',
              fontWeight: 'bold',
              fontSize: 18,
              textTransform: 'uppercase',
            }}
          >
            {item.title}
          </Text>
          <Text style={{ color: '#777' }}>{item.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
