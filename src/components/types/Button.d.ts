import {TouchableOpacityProps} from 'react-native';
import {Preset} from '../button/style';
import {Colors} from '../../utils/colors';
export interface Button extends TouchableOpacityProps {
  text?: string;
  preset?: Preset;
  color: Colors;
  isLoading?: boolean;
}
