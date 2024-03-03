import React from 'react';
import {ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import {Button as ButtonProps} from '../types';
import {container, text as textStyle} from './style';
export const Button = (props: ButtonProps) => {
  const {text, preset = 'primary', color, isLoading = false, ...rest} = props;
  return (
    <TouchableOpacity {...rest} style={[container[preset]]}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[
          textStyle[preset],
          {color, display: isLoading ? 'none' : 'flex'},
        ]}
        children={text && text}
      />
      {isLoading && <ActivityIndicator size="large" color={color} />}
    </TouchableOpacity>
  );
};
