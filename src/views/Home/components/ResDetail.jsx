import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';

ResDetail.propTypes = {
  item:PropTypes.object.isRequired
};

function ResDetail(props) {
  const {item}=props
  console.log(item.imgRes)
  return <View className="border w-[50%]" >
    <Image  style={{ width: 200, height: 200 }} source={{uri:"https://static.kfcvietnam.com.vn/images/category/lg/COMBO%201%20NGUOI.jpg" }}/>
    <Text>{item.restaurantName}</Text>
  </View>;
}

export default ResDetail;
