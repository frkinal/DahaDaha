import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../utils';

const baseContainer: ViewStyle = {
  backgroundColor: colors.black,
  height: 40,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
  borderRadius: 25,
};
const baseText: TextStyle = {
  color: colors.white,
  fontSize: 16,
  fontWeight: 'bold',
};

export const container = StyleSheet.create({
  primary: {
    ...baseContainer,
    backgroundColor: colors.primary,
  },
  secondary: {
    ...baseContainer,
    backgroundColor: colors.secondary,
  },
  tertiary: {
    ...baseContainer,
    height: 55,
    backgroundColor: colors.primary,
  },
});
export const text = StyleSheet.create({
  primary: {
    ...baseText,
  },
  secondary: {
    ...baseText,
    fontSize: 14,
  },

  tertiary: {
    ...baseText,
  },
});

export type Preset = keyof typeof container;
