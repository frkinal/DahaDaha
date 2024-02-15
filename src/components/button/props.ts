import {TouchableOpacityProps} from 'react-native';
import {Preset} from './style';
import {Colors} from '../../utils';
export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  preset?: Preset;
  color: Colors;
  isLoading?: boolean;
}
