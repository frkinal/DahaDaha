import React from 'react';
import {Icons} from '../../assets';
export const Icon = ({icon, ...rest}: any) => {
  let IconSvg = Icons[icon];
  return <IconSvg {...rest} />;
};
