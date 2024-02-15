import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getPromotionDetails} from '../../api';
import {RootState} from '../../redux/store';
import {Button, Icon, RemainingBadge} from '../../components';
import RenderHTML from 'react-native-render-html';
import {colors} from '../../utils';
import {resetPromotionDetails} from '../../redux/slices/slice';

export const PromotionDetailsScreen = () => {
  const dispatch = useDispatch<any>();
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const {Id, color} = route.params;

  const {width} = useWindowDimensions();

  const {promotionDetails, isLoading} = useSelector(
    (state: RootState) => state.slice,
  );

  useEffect(() => {
    dispatch(getPromotionDetails({Id}));
    return () => {
      dispatch(resetPromotionDetails());
    };
  }, []);

  const goBack = () => navigation.goBack();

  return (
    <View style={style.container}>
      <>
        {isLoading?.getPromotionDetails ? (
          <ActivityIndicator
            size="large"
            color={color}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ) : (
          <>
            <View style={style.image_container}>
              <Image
                style={style.image}
                source={{uri: promotionDetails.ImageUrl}}
              />
              <Image
                style={style.brand}
                source={{uri: promotionDetails.BrandIconUrl}}
              />
              <RemainingBadge date={promotionDetails?.RemainingText} />
            </View>
            <ScrollView style={style.text_container}>
              <RenderHTML
                source={{html: promotionDetails.Title}}
                contentWidth={width - 20}
                tagsStyles={{
                  span: {
                    fontWeight: 'bold',
                    fontSize: 26,
                    textAlign: 'left',
                    color: colors.black,
                  },
                }}
              />
              <RenderHTML
                source={{html: promotionDetails.Description}}
                contentWidth={width - 20}
                tagsStyles={{
                  p: {
                    fontSize: 14,
                    textAlign: 'left',
                    color: colors.black,
                  },
                }}
              />
            </ScrollView>
            <View
              style={{
                width: '90%',
                height: 70,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Button text="Hemen Katıl" color="white" preset="tertiary" />
            </View>
            <TouchableOpacity style={style.go_back} onPress={goBack}>
              <Icon icon="Back" />
            </TouchableOpacity>
          </>
        )}
      </>
    </View>
  );
};
