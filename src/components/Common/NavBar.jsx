import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Cart from '../../views/Cart';
import Home from '../../views/Home';
import Profile from '../../views/Profile/Profile';
import MessagesScreen from '../../views/Messages/MessagesScreen';
import { useNavigationState } from '@react-navigation/native';
import {
  BagBold,
  BagOutline,
  MesageOutline,
  MessageBold,
  ShopBold,
  ShopOutline,
  UserBold,
  UserOutline,
} from '../Icons';


const Tab = createBottomTabNavigator();

const iconComponents = {
  Home: {focused: ShopBold, unfocused: ShopOutline},
  Cart: {focused: BagBold, unfocused: BagOutline},
  Messages: {focused: MessageBold, unfocused: MesageOutline},
  Profile: {focused: UserBold, unfocused: UserOutline},
};

export function NavBar() {

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          const IconComponent = focused
            ? iconComponents[route.name].focused
            : iconComponents[route.name].unfocused;

          return <IconComponent color={color} size={size} />;
        },

        tabBarStyle: {
          height:55,
          paddingTop: 10,
        },
        tabBarHideOnKeyboard:true,
        
    
      })}>
      <Tab.Screen
        name="Home"
        options={({navigation}) => ({
          tabBarLabelStyle: {
            fontWeight: navigation.isFocused() ? '600' : '400',
            fontSize:13,
            marginTop:5
          },
          headerShown: false
        })}
        component={Home}
      />
      <Tab.Screen
        name="Cart"
        options={({navigation}) => ({
          tabBarLabelStyle: {
            fontWeight: navigation.isFocused() ? '600' : '400',
            fontSize:13,
            marginTop:5
          },
          headerShown: false
        })}
        component={Cart}
      />
      <Tab.Screen
        name="Messages"
        options={({navigation,route}) => ({
          tabBarLabelStyle: {
            fontWeight: navigation.isFocused() ? '600' : '400',
            fontSize:13,
            marginTop:5
          },
          headerShown: false,
        })}
        component={MessagesScreen}
      />
      <Tab.Screen
        name="Profile"
        options={({navigation}) => ({
          tabBarLabelStyle: {
            fontWeight: navigation.isFocused() ? '600' : '400',
            fontSize:13,
            marginTop:5
          },
          headerShown: false
        })}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
