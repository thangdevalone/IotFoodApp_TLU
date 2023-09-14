import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {VoucherIcon} from '../../../components/Icons';
import {colorDF1, colorDF2} from '../../../utils/colors';
import { handlePrice } from '../../../utils/handle';

FoodDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

function FoodDetail(props) {
  const {item} = props;
  return (
    <View className="w-[200px] mr-5">
      <Image
        style={{width: 200, height: 130}}
        className="rounded-xl"
        source={{uri: `${item.imgFood}`}}
      />
      <View className="flex items-center flex-row mt-2">
        <VoucherIcon size="18" color={colorDF2} />
        <Text style={{color: colorDF2}} className="text-xs ml-1">
          Ưu đãi lớn
        </Text>
      </View>
      <Text
        style={{color: colorDF1}}
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-base  font-semibold capitalize">
        {item.foodName}
      </Text>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-[13px] text-gray-500">
        {item.detail}
      </Text>
      <Text
        style={{color: colorDF1}}
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-[13px] mt-1">
        <Text className="font-semibold">{handlePrice(item.price) || 0} đ</Text> • {item.nameRestaurantFood}
      </Text>
    </View>
  );
}

export default FoodDetail;
