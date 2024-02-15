import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './navigators';
import {Provider} from 'react-redux';
import store from './redux/store';
import {SafeAreaView, StatusBar} from 'react-native';
import {colors} from './utils';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 100000}}>
          <StatusBar
            translucent
            backgroundColor={colors.white}
            barStyle="dark-content"
            animated={true}
          />
          <AppStack />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
