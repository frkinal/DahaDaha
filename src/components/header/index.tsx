import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Button, Icon} from '..';

import AsyncStorage from '@react-native-async-storage/async-storage';

import style from './style';
import {colors} from '../../utils';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem('auth').then(item => {
      if (item) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const login = () => {
    AsyncStorage.setItem('auth', 'true');
    setIsLoggedIn(true);
  };

  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Icon icon="Logo" />
      </View>
      <View style={style.account}>
        {!isLoggedIn && (
          <Button text="Giriş Yap" color="white" onPress={login} />
        )}
        <View
          style={[
            style.profile,
            isLoggedIn && {backgroundColor: colors.primary},
          ]}>
          {isLoggedIn && <View style={style.badge} />}
          <Icon icon="Profile" />
        </View>
      </View>
    </View>
  );
};
