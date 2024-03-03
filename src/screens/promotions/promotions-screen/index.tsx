import React, {useEffect, useMemo, useState} from 'react';
import {View, ActivityIndicator, ScrollView, Alert} from 'react-native';

import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {getPromotionsList, getTagsList} from '../../../api';
import {RootState} from '../../../redux/store';
import {CategoryButton, Header, ImageSlider} from '../../../components';

export const PromotionsScreen = () => {
  const dispatch = useDispatch<any>();

  const [selectedItem, setSelectedItem] = useState<{
    Id: number;
    Name: string;
    IconUrl: string;
    Rank: number;
  }>({
    Id: 0,
    Name: 'Fırsatı Bul',
    IconUrl: '',
    Rank: 0,
  });

  const {tagsList, promotionsList, isLoading} = useSelector(
    (state: RootState) => state.slice,
  );

  useEffect(() => {
    dispatch(getTagsList());
    dispatch(getPromotionsList());
  }, []);

  const promotionList = useMemo(() => {
    if (selectedItem?.Name === 'Fırsatı Bul') return promotionsList;
    const filteredPromotions = promotionsList.filter(item =>
      item.Title.toLocaleLowerCase('tr').includes(
        selectedItem.Name.toLocaleLowerCase('tr'),
      ),
    );
    return filteredPromotions;
  }, [promotionsList, selectedItem]);

  return (
    <View style={style.container}>
      {isLoading?.getTagsList || isLoading?.getPromotionsList ? (
        <ActivityIndicator
          size="large"
          color="#000"
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
          <Header />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={170}
            style={{
              flex: 5,
            }}>
            <CategoryButton
              contents={{
                Id: 0,
                Name: 'Fırsatı Bul',
                IconUrl: '',
                Rank: 0,
              }}
              first
              selectedVal={selectedItem}
              setSelectedVal={setSelectedItem}
            />
            {tagsList?.map((item, index) => {
              return (
                <CategoryButton
                  key={index}
                  contents={item}
                  selectedVal={selectedItem}
                  setSelectedVal={setSelectedItem}
                />
              );
            })}
          </ScrollView>
          <View
            style={{
              flex: 7,
            }}>
            {promotionList?.length > 0 && (
              <ImageSlider data={promotionList} pagination />
            )}
          </View>
          <View
            style={{
              flex: 2,
            }}
          />
        </>
      )}
    </View>
  );
};
