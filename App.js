import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './screen/mobilenavigator/Index';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
