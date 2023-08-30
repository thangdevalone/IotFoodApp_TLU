import React from 'react';
import {Image} from 'react-native';
import IotFood from './iotfood_b.png';
import Banner1 from './banner-1.png';
import Banner2 from './banner-3.jpg';
import Banner3 from './banner-5.jpg';
import Banner4 from './banner-4.jpg';
import FastFood from './fast-food.png'; 
import Clock from './clock.png';
import Diet from './diet.png';
import DiscountCoupon from './discount-coupon.png'
import FoodStore from './food-store.png'; 
import BubbleTea from './bubble-tea.png'

export const IotFoodBlackImage = ({className}) => (
  <Image resizeMode="contain" className={className} source={IotFood} />
);
export const Banner1Image = ({className}) => (
  <Image resizeMode="cover" className={className} source={Banner1} />
);
export const Banner2Image = ({className}) => (
  <Image resizeMode="cover" className={className} source={Banner2} />
);
export const Banner3Image = ({className}) => (
  <Image resizeMode="cover" className={className} source={Banner3} />
);
export const Banner4Image = ({className}) => (
  <Image resizeMode="cover" className={className} source={Banner4} />
);
export const FastFoodImage = ({className}) => (
  <Image resizeMode="contain" className={className} source={FastFood} />
);
export const ClockImage = ({className}) => (
  <Image resizeMode="contain" className={className} source={Clock} />
);
export const DietImage = ({className}) => (
  <Image resizeMode="contain" className={className} source={Diet} />
);
export const DiscountCouponImage = ({className}) => (
  <Image resizeMode="contain" className={className} source={DiscountCoupon} />
);
export const FoodStoreImage = ({className}) => (
  <Image resizeMode="contain" className={className} source={FoodStore} />
);
export const BubbleTeaImage = ({className}) => (
  <Image resizeMode="contain" className={className} source={BubbleTea} />
);
