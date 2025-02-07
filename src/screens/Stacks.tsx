import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import ValidatePhone from './ValidatePhone';

const Stack = createNativeStackNavigator();

const Stacks: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="ValidatePhone" component={ValidatePhone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
