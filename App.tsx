import {View, StyleSheet} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ValidatePhone from './src/screens/ValidatePhone';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LetsStart from './src/screens/LetsStart';
// import ValidatePhone from './src/screens/ValidatePhone';

export type RootStackParamList = {
  Login: undefined;
  ValidateOTP: { phoneNumber: string }; // Pass phone number as param
  LetStart : undefined;
};

const App = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
      <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="ValidateOTP" component={ValidatePhone} options={{headerShown:false}} />
        <Stack.Screen name="LetStart" component={LetsStart} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
// });

export default App;
