import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {VoucherIcon} from '../../../components/Icons';
import {colorDF1, colorDF2} from '../../../utils/colors';

ResDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

function ResDetail(props) {
  const {item} = props;
  return (
    <View className="w-[200px] mr-5">
      <Image
        style={{width: 200, height: 130}}
        className="rounded-xl"
        source={{uri: `${item.imgRes}`}}
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
        {item.restaurantName}
      </Text>
      <Text
        style={{color: colorDF1}}
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-[13px]">
        {item.time || 0} phút • {item.distance} km
      </Text>
    </View>
  );
}

export default ResDetail;
