import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Login from './Login';
import Register from './Register';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }} />
            <Stack.Screen name="Login"  component={Login} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}
