import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
  },
  logo: {
    width: '50%',
    height: 100,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  account: {
    width: '50%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginLeft: 10,
  },
  badge: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.white,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
