import {colors} from '../../utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 150,
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  button_container: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGray,
    flexDirection: 'row',
  },
  search_icon: {
    width: 27,
    height: 27,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  icon_container: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  text_container: {
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.black,
  },
});
