
import StatusBarLayout from "../../components/StatusBarLayout";
import editProfile from "../../assets/editProfile.jpg"
import { View, ImageBackground,StyleSheet,ScrollView, TouchableOpacity,Text,Span} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { useDispatch,useSelector } from "react-redux";
import {authActions} from '../auth/AuthSlice';
import { useState,useEffect } from "react";
import { Copyright } from "../../components/Common";
import { UserActions } from "../auth/UserSlice";
import { useNavigation } from '@react-navigation/native';


function EditProfile() {
  const navigation = useNavigation();

  const currentUser = useSelector((state)=>state.user.userInfo)

  const [name,setName] = useState(currentUser.accountName);
  const [phone, setPhone] = useState(currentUser.sdt);
  const [password, setPassword] = useState("")

  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedPhone, setIsFocusedPhone] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const stateUpdate = useSelector((state)=> state.user.stateUpdate);
  const dispatch = useDispatch();
  const handleLogOut = ()=>{
    dispatch(authActions.logout());
    navigation.replace("Login")
  }
  
  useEffect(()=>{
    const data = {
      phone: phone,
      accountName: name,
      password: password,
    }
    dispatch(UserActions.setInfo(data))
    
  },[phone,name,password])

  useEffect(
    ()=>{
      if(stateUpdate === "fail"){
        Toast.show({
          type: 'error',
          text1: 'Thất bại',
          text2: 'Mật khẩu không chính xác',
          position: "bottom",
          bottomOffset: 160,
        });
        console.log(2)
      }
      if(stateUpdate === "success"){
        Toast.show({
          type: 'success',
          text1: 'Thành công',
          text2: 'Cập nhật thay đổi thành công',
          position: "bottom",
          bottomOffset: 160,
        });
      }
      console.log(stateUpdate)
    }
  ,[stateUpdate])


    return (
        <View className={"h-screen bg-[white] relative"}>
            <Toast position="bottom-[50px] absolute" />
            <ImageBackground source={editProfile} resizeMode="cover" className={"h-[50%]  z-2"}/>
            <View className={"flex flex-row relative justify-center z-3 mt-[-32vh]"}>
                <View >
                    <Icon size={86} name="account-circle" color="#5bc793"  />
                </View>
                <View className={"absolute z-0 bottom-3 right-40 "}>
                <Avatar.Icon size={24} icon="crown" color="rgb(55 65 81)"  style={styles.avatar} />
                </View>
            </View>
            <View className={"p-[12px]"}>
            <View>
              <Text className={"font-semibold text-base text-black"}>
                Tên{' '}
                <Text style={{ color: 'red' }}> *</Text>
              </Text>

                <TextInput
                  value={name}
                  onChangeText={(e) => setName(e)}
                  right={isFocusedName && <TextInput.Icon 
                    icon={"close-circle"} 
                    size={20}
                    color='#8f8f8f'
                    onPress={()=> setName("")}
                  />}
                  onFocus={()=> setIsFocusedName(true)}
                  onBlur={()=>setIsFocusedName(false)}
                  theme={{
                    colors: {
                      primary: isFocusedName ? '#1f1716' : '#8f8f8f', // Màu nhãn và đường viền
                    }
                    }}
                    style={[
                      styles.textInput,
                      isFocusedName && styles.focusedTextInput, // Sử dụng focusedTextInput khi focus
                    ]}
                />
              </View>
              <View>
                <Text className={"font-semibold text-base text-black"}>
                  Số điện thoại{' '}
                  <Text style={{ color: 'red' }}> *</Text>
                </Text>

                  <TextInput
                    value={phone}
                    onChangeText={(e) => setPhone(e)}
                    right={isFocusedPhone && <TextInput.Icon 
                      icon={"close-circle"} 
                      size={20}
                      color='#8f8f8f'
                      onPress={()=> setPhone("")}
                    />}
                    onFocus={()=> setIsFocusedPhone(true)}
                    onBlur={()=>setIsFocusedPhone(false)}
                    theme={{
                      colors: {
                        primary: isFocusedPhone ? '#1f1716' : '#8f8f8f', // Màu nhãn và đường viền
                      }
                      }}
                      style={[
                        styles.textInput,
                        isFocusedPhone && styles.focusedTextInput, // Sử dụng focusedTextInput khi focus
                      ]}
                    />
              </View>
              <View className = "mt-2">
              <Text className={"font-semibold text-base text-black"}>
                  Nhập mật khẩu xác nhận{' '}
                  <Text style={{ color: 'red' }}> *</Text>
                </Text>
              <TextInput
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    secureTextEntry={!showPassword}
                    right={<TextInput.Icon 
                      icon={!showPassword ? 'eye-off': 'eye'} 
                      onPress={()=> setShowPassword(!showPassword)}
                      size={20}
                    />}
                    onFocus={()=> setIsFocusedPassword(true)}
                    onBlur={()=>setIsFocusedPassword(false)}
                    theme={{
                      colors: {
                        primary: isFocusedPassword ? '#1f1716' : '#8f8f8f', // Màu nhãn và đường viền
                      }
                      }}
                      style={[
                        styles.textInput,
                        isFocusedPassword && styles.focusedTextInput, // Sử dụng focusedTextInput khi focus
                      ]}
                    />
              </View>
            </View>

            <TouchableOpacity onPress={handleLogOut} className="flex flex-row justify-center mt-[9vh]">
              <Text className = "text-xl font-semibold" >
                Đăng xuất
              </Text>
            </TouchableOpacity>
           
            <View className=" flex flex-row justify-center mt-[3vh] ">
                  <Copyright />
            </View>
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
