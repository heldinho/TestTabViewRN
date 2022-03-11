import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

// const data = [
//   {
//     id: 1,
//     name: 'Helder Passos',
//     msg_preview: 'mensagem apagada!',
//     time: 'Ontem',
//   },
//   {
//     id: 2,
//     name: 'Mary Viana',
//     msg_preview: 'mensagem apagada!',
//     time: 'Ontem',
//   },
//   {
//     id: 3,
//     name: 'Miguel Passos',
//     msg_preview: 'mensagem apagada!',
//     time: 'Ontem',
//   },
// ];

export default function Talk() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json));
    })();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 55,
                height: 55,
                backgroundColor: '#aaa',
                marginRight: 20,
                borderRadius: 100,
              }}
            />
            <View style={{ marginTop: 5 }}>
              <Text style={{ color: '#000', fontSize: 18 }}>{item.name}</Text>
              <Text style={{ color: '#777' }}>{item.email}</Text>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <View>
              <Text style={{ color: '#444' }}>{item.time}</Text>
            </View>
            <View></View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
