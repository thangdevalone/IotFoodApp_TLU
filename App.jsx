import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import LoginPage from './src/views/auth/pages/LoginPage';
import RegisterPage from './src/views/auth/pages/RegisterPage';

import Home from './src/views/Home';

const Stack = createNativeStackNavigator();

const App = () => {

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
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
