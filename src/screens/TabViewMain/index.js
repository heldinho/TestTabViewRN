import React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Talk from './Tabs/Talk';
import Calls from './Tabs/Calls';
import Status from './Tabs/Status';
import { translate } from '../../locales';
import styles from './styles';

const renderScene = SceneMap({
  1: Talk,
  2: Status,
  3: Calls,
});

export default function TabViewMain() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 1, title: translate('talk') },
    { key: 2, title: translate('status') },
    { key: 3, title: translate('calls') },
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
