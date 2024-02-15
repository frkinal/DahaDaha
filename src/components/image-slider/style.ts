import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export default StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    padding: 5,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  image_container: {
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 120,
  },
  image: {
    width: '100%',
    borderRadius: 20,
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
  text_container: {
    width: '100%',
    padding: 10,
  },
  daha_button: {},
  daha: {
    fontSize: 15,
    textAlign: 'center',
  },
  backgorund: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    transform: [{rotate: '10deg'}],
    bottom: -30,
  },
  shadow: {
    position: 'absolute',
    bottom: -25,
    height: 40,
  },
});
