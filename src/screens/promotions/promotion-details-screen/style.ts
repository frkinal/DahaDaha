import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image_container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 120,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderBottomLeftRadius: 120,
  },
  brand: {
    width: 70,
    height: 70,
    borderRadius: 50,
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    bottom: 0,
    left: 0,
  },

  go_back: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.lightBlack,
    position: 'absolute',
    top: 50,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_container: {
    width: '90%',
    flexGrow: 1,
    alignSelf: 'center',
  },
});
