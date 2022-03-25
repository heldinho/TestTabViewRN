import * as React from 'react';
import { Provider } from 'react-redux';
import TabViewMain from './src/screens/TabViewMain';
import stores from './src/stores';

export default function App() {
  return (
    <Provider store={stores}>
      <TabViewMain />
    </Provider>
  );
}
