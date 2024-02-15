import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {ImageSliderPaginationProps} from './props';

import style from './style';
import {colors} from '../../utils';

export const ImageSliderPagination = (props: ImageSliderPaginationProps) => {
  const {data, x, size, color} = props;
  return (
    <View style={style.container}>
      {data.map((_: any, i: any) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const animatedDotStyle = useAnimatedStyle(() => {
          const widthAnimation = interpolate(
            x.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [10, 20, 10],
            Extrapolate.CLAMP,
          );
          const opacityAnimation = interpolate(
            x.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [0.5, 1, 0.2],
            Extrapolate.CLAMP,
          );
          return {
            width: widthAnimation,
            opacity: opacityAnimation,
            backgroundColor: color,
          };
        });
        return <Animated.View style={[style.dots, animatedDotStyle]} key={i} />;
      })}
    </View>
  );
};
