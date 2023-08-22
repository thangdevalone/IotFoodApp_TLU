import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import StatusBarLayout from '../../components/StatusBarLayout';
import { Avatar,List, MD3Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import userApi from '../../api/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from '../auth/UserSlice';

const myAccount = [
  {title:"Phương thức thanh toán",
  leftIcon:"credit-card-multiple-outline",
  rightIcon:"chevron-right" },
  {title:"Quản lý tài khoản ",
  leftIcon:"cog-outline",
  rightIcon:"chevron-right" },
  {title:"Ưu đãi",
  leftIcon:"sale",
  rightIcon:"chevron-right" },

]

function Profile(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentUser = useSelector((state)=>state.user.userInfo)
  useEffect(()=>{
    try{
      dispatch(UserActions.getInfo())
    }catch (error){
      console.log(error);
    }
    },[currentUser.accountName])
   



  return (
    <StatusBarLayout>
      <View className="m-[16px] h-screen bg-white ">
        <View className={"flex flex-row "}>
          <View className={"basis-[25%]"} >
            <View className={styles.container}>
              <Icon size={86} name="account-circle" color="#5bc793" style={{backgroundColor: "white"}}  onPress={() => navigation.navigate("EditProfile")} />
            </View>
            <View style={styles.avatarContainer}>
              <Avatar.Icon size={24} icon="pencil" color="rgb(55 65 81)"  style={styles.avatar} onPress={() => navigation.navigate("EditProfile")} />
            </View>
          </View>
          <Text className={"mx-auto my-auto text-[22px] font-bold text-black basis-[73%]"}>{currentUser.accountName}</Text>
        </View>
        <View >
          <List.Section>
            <List.Subheader className={"text-black font-bold text-xl pl-0 "}  >Tài khoản của tôi</List.Subheader>
              { myAccount.map((type,index) =>{
                    return (<List.Item 
                      key={index}
                      title={type.title}
                      left={() => <List.Icon icon={type.leftIcon} />} 
                      right={() =><List.Icon icon ={type.rightIcon}  />} 
                      className={"border-b-[0.5px] border-slate-500 justify-between flex pr-0"}
                    />)
                }) }
          </List.Section>
        </View>
      </View>
    </StatusBarLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar : {
    backgroundColor: "white", 
    color:"black",    
    elevation: 16, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  avatarContainer: {
    position: 'absolute',
    bottom: 8,
    right: 12,
    zIndex: 1,
  },
}
)

export default Profile;