import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export default StyleSheet.create({
  remaining_date_container: {
    height: 30,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.lightBlack,
    position: 'absolute',
    bottom: 15,
    right: 15,
    justifyContent: 'center',
  },
  remaining_text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
  },
});
