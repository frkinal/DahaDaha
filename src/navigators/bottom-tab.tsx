import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Platform, Text} from 'react-native';
import {CompassIcon, WalletIcon} from '../assets';
import {Icon} from '../components';
import {colors} from '../utils';
import {HomeScreen} from '../screens';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={'home-screen'}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: {display: 'none'},
        tabBarHideOnKeyboard: true,
        lazy: true,
        tabBarStyle: {
          position: 'absolute',
          borderWidth: 2,
          borderColor: colors.lightGray,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: '#fff',
          height: Platform.OS === 'ios' ? 75 : 60,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },
        tabBarIcon: ({focused}) => {
          const color: string = focused ? colors.black : colors.gray;
          if (route.name === 'wallet-screen') {
            return (
              <View style={styles.tab}>
                {WalletIcon(color)}
                <Text style={[styles.tab_text, {color}]}>Daha Cüzdan</Text>
              </View>
            );
          } else if (route.name === 'discovery-screen') {
            return (
              <View style={styles.tab}>
                {CompassIcon(color)}
                <Text style={[styles.tab_text, {color}]}>Keşfet</Text>
              </View>
            );
          }
        },
      })}>
      <Tab.Screen
        name="discovery-screen"
        component={HomeScreen}
        options={{
          title: 'Keşfet',
        }}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: () => (
            <View style={styles.daha}>
              <Icon icon="TabLogo" />
            </View>
          ),
        })}
        name="home-screen"
        component={HomeScreen}
      />
      <Tab.Screen
        name="wallet-screen"
        component={HomeScreen}
        options={{
          title: 'Keşfet',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  daha: {
    position: 'absolute',
    alignItems: 'center',
    top: -20,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab_text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
