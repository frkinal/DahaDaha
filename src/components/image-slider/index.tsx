import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from 'react-native-reanimated';

import RenderHtml from 'react-native-render-html';

import {ImageSliderPagination, ImageSliderShadow, RemainingBadge} from '..';
import {ImageSliderProps} from './props';

import style from './style';
import {useNavigation} from '@react-navigation/native';
export const ImageSlider = (props: ImageSliderProps) => {
  const {autoPlay, data, pagination} = props;
  const scrollViewRef = useAnimatedRef<any>(null);
  const navigation = useNavigation<any>();
  const interval = useRef<any>();
  const [isAutoPlay, setIsAutoPlay] = useState<any>(autoPlay);
  const [activePageColor, setActivePageColor] = useState<string>('');
  const [newData] = useState([
    {key: 'spacer-left'},
    ...data,
    {key: 'spacer-right'},
  ]);
  const {width, height} = useWindowDimensions();
  const SIZE = width * 0.8;
  const SPACER = width * 0.1;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    setActivePageColor(
      data.length > 0
        ? data[Math.round(x.value / SIZE)].PromotionCardColor
        : '#000',
    );
  }, [x.value]);

  useEffect(() => {
    if (isAutoPlay === true) {
      let _offSet = offSet.value;
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
          _offSet = 0;
        } else {
          _offSet = Math.floor(_offSet + SIZE);
        }
        scrollViewRef.current.scrollTo({x: _offSet, y: 0});
      }, 2000);
    } else {
      clearInterval(interval.current);
    }
  }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false);
        }}
        onMomentumScrollEnd={e => {
          offSet.value = e.nativeEvent.contentOffset.x;
          setIsAutoPlay(autoPlay);
        }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {newData?.map((item: any, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const animateStyle = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.9, 1, 0.9],
            );
            return {
              transform: [{scale}],
            };
          });
          if (!item.ImageUrl) {
            return <View style={{width: SPACER}} key={index} />;
          }
          const source = {
            html: item?.Title,
          };
          const navigateCampignScreen = () => {
            navigation.navigate('promotion-details-screen', {
              Id: item?.Id,
              color: activePageColor,
            });
          };
          return (
            <View
              style={{
                width: SIZE,
                height: height,
              }}
              key={index}>
              <Animated.View style={animateStyle}>
                <View style={style.shadow}>
                  <ImageSliderShadow
                    width={width * 0.8}
                    color={item.PromotionCardColor}
                  />
                </View>
                <View style={[style.container]}>
                  <View style={style.image_container}>
                    <Image style={style.image} source={{uri: item.ImageUrl}} />
                    <Image
                      style={style.brand}
                      source={{uri: item.BrandIconUrl}}
                    />
                    <RemainingBadge date={item?.RemainingText} />
                  </View>
                  <View style={style.text_container}>
                    <RenderHtml
                      contentWidth={width}
                      source={source}
                      tagsStyles={{
                        p: {
                          fontFamily: 'OpenSans',
                          fontSize: 15,
                          color: '#000',
                        },
                        span: {
                          fontFamily: 'OpenSans',
                          fontSize: 17,
                          color: '#000',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        },
                      }}
                    />
                    <TouchableOpacity
                      style={style.daha_button}
                      onPress={navigateCampignScreen}>
                      <Text
                        style={[style.daha, {color: item?.PromotionCardColor}]}>
                        Daha Daha
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Animated.View>
            </View>
          );
        })}
      </Animated.ScrollView>
      {pagination && (
        <ImageSliderPagination
          color={activePageColor}
          data={data}
          x={x}
          size={SIZE}
        />
      )}
    </View>
  );
};
