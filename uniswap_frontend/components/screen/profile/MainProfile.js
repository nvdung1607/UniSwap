import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Profile from './Profile';
import ChangePassword from './ChangePassword';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerBackTitleVisible: false, }}
      />
    </Stack.Navigator>
  );
}
