import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import style from './style';
import {CategoryButton as CategoryButtonProps} from '../types';
import {colors} from '../../utils';
import {Icon} from '..';
export const CategoryButton = (props: CategoryButtonProps) => {
  const {contents, selectedVal, setSelectedVal, first} = props;
  const selectCategory = () => setSelectedVal(contents);
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[
          style.button_container,
          selectedVal?.Id === contents?.Id && {borderColor: colors.primary},
        ]}
        onPress={selectCategory}>
        <View style={style.icon_container}>
          {!first ? (
            <Image style={style.image} source={{uri: contents?.IconUrl}} />
          ) : (
            <View style={style.search_icon}>
              <Icon icon="Search" />
            </View>
          )}
        </View>
        <View style={style.text_container}>
          <Text style={style.text} children={contents?.Name} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
