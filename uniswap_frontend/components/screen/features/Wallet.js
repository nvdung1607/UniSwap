import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Deposit from './Deposit';
import Withdraw from './Withdraw';
import MyWallet from './MyWallet';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Wallet">
      <Stack.Screen
        name="MyWallet"
        component={MyWallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Deposit"
        component={Deposit}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        options={{ headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
}
