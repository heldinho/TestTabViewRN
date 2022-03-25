import * as React from 'react';
import { Provider } from 'react-redux';
import TabViewMain from './src/screens/TabViewMain';
import stores from './src/stores';
import Teste from './src/screens/Teste';

export default function App() {
  return (
    <Provider store={stores}>
      <Teste />
      {/* <TabViewMain /> */}
    </Provider>
  );
}
