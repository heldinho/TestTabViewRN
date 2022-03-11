import styles from './styles';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Talk from './Tabs/Talk';
import Calls from './Tabs/Calls';
import Status from './Tabs/Status';

const renderScene = SceneMap({
  1: Talk,
  2: Status,
  3: Calls,
});

export default function TabViewMain() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 1, title: 'CONVERSAS' },
    { key: 2, title: 'STATUS' },
    { key: 3, title: 'CHAMADAS' },
  ]);

  return (
    <TabView
      showPageIndicator={true}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
