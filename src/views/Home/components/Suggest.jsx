import React from 'react';
import {Text, View} from 'react-native';
import {
  BubbleTeaImage,
  ClockImage,
  DietImage,
  DiscountCouponImage,
  FastFoodImage,
  FoodStoreImage,
} from '../../../assets';
import { colorDF1 } from '../../../utils/colors';

const Suggest = () => {
  return (
    <View
      style={{flex: 1}}
      className="flex-row flex-wrap justify-evenly gap-2">
      <View className="w-[80px]">
        <View className="h-[80px] border border-gray-400 mb-2 flex items-center justify-center rounded-[16px] ">
          <FastFoodImage className="w-[65%]" />
        </View>
        <Text className="text-center" style={{color:colorDF1,fontWeight:"bold"}}>Bữa trưa tiết kiệm</Text>
      </View>
      <View className="w-[80px]">
        <View className="h-[80px] border border-gray-400 mb-2 flex items-center justify-center rounded-[16px] ">
          <ClockImage className="w-[65%]" />
        </View>
         <Text className="text-center" style={{color:colorDF1,fontWeight:"bold"}}>Đặt trước món ăn</Text>
      </View>
      <View className="w-[80px]">
        <View className="h-[80px] border border-gray-400 mb-2 flex items-center justify-center rounded-[16px] ">
          <BubbleTeaImage className="w-[65%]" />
        </View>
         <Text className="text-center" style={{color:colorDF1,fontWeight:"bold"}}>Trà sữa</Text>
      </View>
      <View className="w-[80px]">
        <View className=" h-[80px] border border-gray-400 mb-2 flex items-center justify-center rounded-[16px] ">
          <FoodStoreImage className="w-[65%]" />
        </View>
         <Text className="text-center" style={{color:colorDF1,fontWeight:"bold"}}>Quán ngon gần đây</Text>
      </View>
      <View className="w-[80px]">
        <View className=" h-[80px] border border-gray-400 mb-2 flex items-center justify-center rounded-[16px] ">
          <DiscountCouponImage className="w-[65%]" />
        </View>
         <Text className="text-center" style={{color:colorDF1,fontWeight:"bold"}}>Món ăn giảm giá</Text>
      </View>
      <View className="w-[80px]">
        <View className=" h-[80px] border border-gray-400 mb-2 flex items-center justify-center rounded-[16px] ">
          <DietImage className="w-[65%]" />
        </View>
         <Text className="text-center" style={{color:colorDF1,fontWeight:"bold"}}>Món ăn nhiều sao</Text>
      </View>
    </View>
  );
};

export default Suggest;
