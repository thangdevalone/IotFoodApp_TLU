
import StatusBarLayout from "../../components/StatusBarLayout";
import IotFood from "../../assets/iotfood_b.png"
import { View, ImageBackground,StyleSheet,ScrollView, TouchableOpacity,Text,Span} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, TextInput } from 'react-native-paper';

import { useDispatch } from "react-redux";
import {authActions} from '../auth/AuthSlice';
import { useState } from "react";


function EditProfile() {
  const [text,setText] = useState("hahaha");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const handleLogOut = ()=>{
    dispatch(authActions.logout());
  }
    return (
        <View className={"h-screen bg-[white]"}>
            <ImageBackground source={IotFood} resizeMode="cover" className={"h-[20%] bg-[#5bc793] z-2"}/>
            <View className={"flex flex-row relative justify-center z-3 mt-[-48px] "}>
                <View >
                    <Icon size={86} name="account-circle" color="red"  />
                </View>
                <View className={"absolute z-0 bottom-3 right-40 "}>
                <Avatar.Icon size={24} icon="pencil" color="rgb(55 65 81)"  style={styles.avatar} />
                </View>
            </View>
            <View className={"p-[12px]"}>
            <View>
              <Text className={"font-semibold text-base text-black"}>
                Tên{' '}
                <Text style={{ color: 'red' }}> *</Text>
              </Text>

                <TextInput
                  value={text}
                  onChangeText={text => setText(text)}
                  right={<TextInput.Icon 
                    icon={"close-circle"} 
                    size={20}
                    color='#8f8f8f'
                  />}
                  onFocus={()=> setIsFocused(true)}
                  theme={{
                    colors: {
                      primary: isFocused ? '#1f1716' : '#8f8f8f', // Màu nhãn và đường viền
                    }
                    }}
                    style={[
                      styles.textInput,
                      isFocused && styles.focusedTextInput, // Sử dụng focusedTextInput khi focus
                    ]}
                    
                  
                />
              </View>
            </View>

            <TouchableOpacity onPress={handleLogOut}>
              <Text>
                Dang ki
              </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar : {
      backgroundColor: "white", 
      color:"black",    
      elevation: 16, 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.6,
      shadowRadius: 4,
      
    },
    textInput: {
      backgroundColor: 'white',
      color: 'black',
      borderBottomWidth: 0.2, // Độ dày của borderBottom mặc định
      fontSize: 20,
      fontWeight: '700',
    },
    focusedTextInput: {
      borderBottomWidth: 0.5, // Độ dày của borderBottom khi focus
    },
  }
  )
export default EditProfile;
