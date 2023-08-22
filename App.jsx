import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import LoginPage from './src/views/auth/pages/LoginPage';
import RegisterPage from './src/views/auth/pages/RegisterPage';
import EditProfile from './src/views/Profile/EditProfile';

import AppLayout from './src/components/AppLayout';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from "react-native"
import { useDispatch,useSelector } from 'react-redux';
import { UserActions } from './src/views/auth/UserSlice';


const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const accountName = useSelector((state)=> state.user.accountName);
  console.log(accountName);
  const phone = useSelector((state)=> state.user.phone)

  const dataUser={
    password: "Camapbeo2202", 
    sdt: phone, 
    accountName: accountName,
    imgUser: " "
  }
  const handleEdit = ()=>{
    dispatch(UserActions.updateInfo(dataUser))
    console.log(1);
  }
  const user1 = useSelector(state => state.user.userInfo)
  console.log(user1);
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AppLayout"
            component={AppLayout}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={({navigation})=>
                      ({headerShown: true,
                      headerLeft : ()=><Icon name="close" size={24} className={"font-black"} onPress={() => navigation.goBack()} />,
                      headerRight: ()=><Text className="text-base text-black font-normal" onPress={handleEdit}>Chỉnh sửa</Text>,
                      title: "",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
