import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Login from './MainScreens/Login';
import Welcome from './MainScreens/Welcome';
import Register from './MainScreens/Register';
import Home from './MainScreens/Home';
import Wishlist from './MainScreens/Wishlist';
import Order from './MainScreens/Order';
import Account from './MainScreens/Account';
import ForgotPassword from './MainScreens/Forgotpass';
import Changepassword from './ProfileSubScreens/Changepassword';
import Notifications from './ProfileSubScreens/Notifications';
import Aboutus from './ProfileSubScreens/Aboutus';
import Myprofile from './ProfileSubScreens/Myprofile';
import Breakfast from './ScreensMenu/Breakfast';
import Bhaji from './ScreensMenu/Bhaji';
import Roti from './ScreensMenu/Roti';
import Rice from './ScreensMenu/Rice';
import Desert from './ScreensMenu/Desert';
import Drink from './ScreensMenu/Drink';
import Dal from './ScreensMenu/Dal';
import Starter from './ScreensMenu/Starter';
import ThingsmustTry from './ScreensMenu/ThingsmustTry';
import Itemdesc from './MainScreens/Itemdesc';
import LanguageSelector from './components/langsel';
import Languageselector from './components/langsel';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabnavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#FF5733',
        tabBarShowLabel: false, 
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 6,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} size={22} color={color} />
          ),
        }}
        component={Home}
        name="Home"
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHeart} size={22} color={color} />
          ),
        }}
        component={Wishlist}
        name="Wishlist"
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faShoppingCart} size={22} color={color} />
          ),
        }}
        component={Order}
        name="Order"
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUser} size={22} color={color} />
          ),
        }}
        component={Account}
        name="Account"
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        //initialRouteName='Languageselector'
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Languageselector" component={Languageselector} />
        <Stack.Screen
          name="Myprofile"
          component={Myprofile}
          options={{
            title: 'My Profile',
            headerShown: true, 
            headerBackTitleVisible: false, 
            headerTintColor: '#FF6347',
            headerStyle: {
              backgroundColor: '#f5f5f5', 
            },
          }}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
            title: 'My Profile',
            headerShown: true, 
            headerBackTitleVisible: false, 
            headerTintColor: '#FF6347',
            headerStyle: {
              backgroundColor: '#f5f5f5', 
            },
          }}/>
        <Stack.Screen name="Changepassword" component={Changepassword} options={{
            title: 'Change Password',
            headerShown: true, 
            headerBackTitleVisible: false, 
            headerTintColor: '#FF6347',
            headerStyle: {
              backgroundColor: '#f5f5f5', 
            },
          }}/>
        {/* <Stack.Screen name="Paymentsetting" component={Paymentsetting} options={{
            title: 'Payment',
            headerShown: true, 
            headerBackTitleVisible: false, 
            headerTintColor: '#FF6347',
            headerStyle: {
              backgroundColor: '#f5f5f5', 
            },
          }}/> */}
        <Stack.Screen name="Notifications" component={Notifications} options={{
            title: 'Notifications',
            headerShown: true, 
            headerBackTitleVisible: false, 
            headerTintColor: '#FF6347',
            headerStyle: {
              backgroundColor: '#f5f5f5', 
            },
          }}/>
        <Stack.Screen name="Aboutus" component={Aboutus} options={{
            title: 'About Us',
            headerShown: true, 
            headerBackTitleVisible: false, 
            headerTintColor: '#FF6347',
            headerStyle: {
              backgroundColor: '#f5f5f5', 
            },
          }}/>
          <Stack.Screen name="Breakfast" component={Breakfast} />
          <Stack.Screen name="Bhaji" component={Bhaji} />
          <Stack.Screen name="Roti" component={Roti} />
          <Stack.Screen name="Rice" component={Rice} />
          <Stack.Screen name="Desert" component={Desert} />
          <Stack.Screen name="Drink" component={Drink} />
          <Stack.Screen name="Dal" component={Dal} />
          <Stack.Screen name="Starter" component={Starter} />
          <Stack.Screen name="Thingsmusttry" component={ThingsmustTry} />
          <Stack.Screen name="Itemdesc" component={Itemdesc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
