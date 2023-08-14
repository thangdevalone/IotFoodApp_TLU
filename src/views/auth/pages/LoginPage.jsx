import {yupResolver} from '@hookform/resolvers/yup';
import React, {useEffect, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import * as yup from 'yup';
import {TextField} from '../../../components/FormControls';
import {Avatar, Button, ProgressBar, Title} from 'react-native-paper';
import {Copyright} from '../../../components/Common';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../AuthSlice';
import Toast from 'react-native-toast-message';
import PasswordField from '../../../components/FormControls/PasswordField';
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight, // Adjust the marginTop to create space for the status bar
  },
});
function LoginPage() {
  const [isRemember, setRemember] = useState(false);
  const logging = useSelector(state => state.auth.logging);
  const actionAuth = useSelector(state => state.auth.actionAuth);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const InitialLoginForm = {
    username: '',
    password: '',
  };
  const schema = yup.object().shape({
    username: yup.string().required('Cần nhập mã sinh viên'),
    password: yup.string().required('Cần nhập mật khẩu'),
  });
  useEffect(() => {
    if (actionAuth == 'Failed') {
      Toast.show({
        type: 'error',
        text1: 'Thất bại',
        text2: 'Mã sinh viên hoặc mật khẩu không chính xác',
      });
    }
    if (actionAuth == 'Success') {
      navigation.replace('Home');
    }
  }, [actionAuth]);
  const form = useForm({
    defaultValue: InitialLoginForm,
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    dispatch(authActions.login(data));
  };
  return (
    <SafeAreaView className="bg-white">
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        {logging && <ProgressBar
          indeterminate={true}
          className="fixed top-0 left-0 w-screen"
        />}
        <View className="p-[30px] h-screen bg-white ">
          <Toast position="top" />
          <View className="mt-[10vh] h-[100%]">
            <View className="flex mb-[20px] justify-center items-center">
              <Avatar.Icon size={40} icon="lock" />
              <Title className="text-3xl mt-[10px]  text-black">
                Đăng nhập
              </Title>
            </View>
            <FormProvider {...form}>
              <TextField name="username" label="Mã sinh viên" />
              <PasswordField name="password" label="Mật khẩu" />
              <TouchableOpacity onPress={() => setRemember(!isRemember)}>
                <View className="flex flex-row items-center">
                  <CheckBox
                    value={isRemember}
                    onValueChange={() => setRemember(!isRemember)}
                    style={{
                      transform: [{scaleX: 1.2}, {scaleY: 1.2}],
                      marginLeft: -3,
                      marginRight: 5,
                    }}
                  />
                  <Text className="text-base text-black">
                    Tự động đăng nhập
                  </Text>
                </View>
              </TouchableOpacity>

              <Button
                style={{
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                }}
                mode="contained"
                className="my-3"
                disabled={logging}
                onPress={form.handleSubmit(onSubmit)}>
                Đăng nhập
              </Button>
            </FormProvider>
            <View className="flex justify-between flex-row mt-1">
              <TouchableOpacity>
                <Text className="text-blue-600 text-base underline">
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text className="text-blue-600 text-base underline">
                  Đăng ký ngay
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row justify-center mt-[15vh]">
              <Copyright />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginPage;
