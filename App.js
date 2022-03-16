import * as React from 'react';
import { Provider } from 'react-redux';
import TabViewMain from './app/screens/TabViewMain';
import stores from './app/stores';

export default function App() {
  return (
    <Provider store={stores}>
      <TabViewMain />
    </Provider>
  );
}
