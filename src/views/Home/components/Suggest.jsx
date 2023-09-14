import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {
  BubbleTeaImage,
  ClockImage,
  DietImage,
  DiscountCouponImage,
  FastFoodImage,
  FoodStoreImage,
} from '../../../assets';
import {colorDF1} from '../../../utils/colors';

const data = [
  {
    key: '1',
    text: 'Bữa trưa tiết kiệm',
    image: <FastFoodImage className="w-[65%]" />,
  },
  {
    key: '2',
    text: 'Đặt trước món ăn',
    image: <ClockImage className="w-[65%]" />,
  },
  {key: '3', text: 'Trà sữa', image: <BubbleTeaImage className="w-[65%]" />},
  {
    key: '4',
    text: 'Quán ngon gần đây',
    image: <FoodStoreImage className="w-[65%]" />,
  },
  {
    key: '5',
    text: 'Món ăn giảm giá',
    image: <DiscountCouponImage className="w-[65%]" />,
  },
  {
    key: '6',
    text: 'Món ăn nhiều sao',
    image: <DietImage className="w-[65%]" />,
  },
];
const itemMargin = 10; // Khoảng cách giữa các mục

const Suggest = () => {
  return (
    <FlatList
      data={data}
      nestedScrollEnabled={true}
      scrollEnabled={false}
      numColumns={3}
      columnWrapperStyle={{justifyContent: 'space-around', marginBottom: 10}}
      renderItem={({item}) => (
        <View className="w-[80px]">
          <View className="h-[80px] border border-gray-400 mb-2 flex items-center justify-center rounded-[16px] ">
            {item.image}
          </View>
          <Text
            className="text-center"
            style={{color: colorDF1, fontWeight: 'bold'}}>
            {item.text}
          </Text>
        </View>
      )}
      keyExtractor={item => item.key}
    />
  );
};

export default Suggest;
