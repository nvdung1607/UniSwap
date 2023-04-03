import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import Auth from './auth/Auth';
import MainProfile from './screen/profile/MainProfile';

import Home from './screen/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Wallet from './screen/features/Wallet';
import Pool from './screen/Pool';
const Tab = createBottomTabNavigator();
import { useSelector } from 'react-redux';

export default function App() {
  const isLogin = useSelector((state) => state.auth.login);
  if (!isLogin) {
    return <Auth />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: 'absolute' },
          tabBarBackground: () => (
            <BlurView
              tint="dark"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
          tabBarActiveTintColor: '#fff',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarLabel: 'Wallet',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="Pool"
          component={Pool}
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarLabel: 'Pool',

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="pool" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={MainProfile}
          options={{
            headerShown: false,

            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarLabel: 'Profile',

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={35} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
