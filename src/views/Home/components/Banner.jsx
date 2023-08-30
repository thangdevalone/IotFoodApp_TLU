import React from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  Banner1Image,
  Banner2Image,
  Banner3Image,
  Banner4Image,
} from '../../../assets';

function Banner() {
  return (
    <Swiper
      loop={true}
      autoplayTimeout={6}
      autoplay={true}
      dot={
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,.2)',
            width: 7,
            height: 7,
            borderRadius: 4,
            marginLeft: 4,
            marginRight: 4,
            marginTop: 4,
            marginBottom: 8,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: '#007aff',
            width: 7,
            height: 7,
            borderRadius: 4,
            marginLeft: 4,
            marginRight: 4,
            marginTop: 4,
            marginBottom: 8,
          }}
        />
      }>
      <View
        style={{
          width: '100%',
          height: '100%',
   
        }}>
        <Banner1Image className="w-[100%] h-[100%]" />
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
         
        }}>
        <Banner2Image className="w-[100%] h-[100%]" />
      </View>

      <View
        style={{
          width: '100%',
          height: '100%',
         
        }}>
        <Banner3Image className="w-[100%] h-[100%]" />
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
        
        }}>
        <Banner4Image className="w-[100%] h-[100%]" />
      </View>
    </Swiper>
  );
}

export default Banner;
