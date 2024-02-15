import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTab} from '.';
import {PromotionDetailsScreen} from '../screens';

const Stack = createNativeStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="bottom-tab" component={BottomTab} />
      <Stack.Screen
        name="promotion-details-screen"
        component={PromotionDetailsScreen}
      />
    </Stack.Navigator>
  );
};
