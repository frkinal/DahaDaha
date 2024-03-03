import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import dayjs from 'dayjs';

import style from './style';

import {RemainingBadge as ReaminingBadgeProps} from '../types';

export const RemainingBadge = (props: ReaminingBadgeProps) => {
  const {date} = props;

  const [remainingDate, setRemainingDate] = useState('');

  useEffect(() => {
    if (date) {
      const [day, month, year] = date?.split('.')?.map(value => Number(value));
      const remaining = dayjs(new Date(year, month - 1, day)).diff(
        Date.now(),
        'day',
      );
      setRemainingDate(remaining.toString());
    }
  }, [date]);

  return (
    <View style={style.remaining_date_container}>
      <Text style={style.remaining_text}>{`Son ${remainingDate} gün`}</Text>
    </View>
  );
};
