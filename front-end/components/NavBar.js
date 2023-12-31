import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Import Text
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

// Import Screens
import HomeScreen from '../screens/Home';
import BookingScreen from '../screens/Booking';
import LiveScreen from '../screens/Live';
import ProfileScreen from '../screens/Profile';


const Tab = createBottomTabNavigator();

function TabNavigator() {

    // Load fonts

    const[loaded] = useFonts({
      Quicksand_300Light,
      Quicksand_400Regular,
      Quicksand_500Medium,
      Quicksand_600SemiBold,
      Quicksand_700Bold,
    });
    
    if (!loaded) {
      return null;
    }

    // Return the navigation

    return(
        <Tab.Navigator>
          <Tab.Screen
            name="Home" 
            component={HomeScreen}
            options={{
              headerShown:true,
              tabBarLabel:"Home",
              headerTitleStyle:{fontFamily:"Quicksand_600SemiBold"},
              tabBarIcon: ({focused}) => {
                const iconimg = focused ? require('../assets/homeIcon.png') : require('../assets/homeIcon.png')
                return(
                        <Image 
                source={iconimg}
                style={{height:30,width:30}}
                />
                )
              }
            }}
          />
          <Tab.Screen
            name="Booking" 
            component={BookingScreen}
            options={{
              headerShown:false,
              tabBarLabel:"Booking",
              headerTitleStyle:{fontFamily:"Quicksand_600SemiBold"},
              headerTitleAlign:'center',
              tabBarIcon: ({focused}) => {
                const iconimg = focused ? require('../assets/bookingIcon.png') : require('../assets/bookingIcon.png')
                return(
                        <Image 
                source={iconimg}
                style={{height:40,width:40}}
                />
                )
              }
            }}
          />
          <Tab.Screen
            name="Live" 
            component={LiveScreen}
            options={{
              headerShown:false,
              tabBarLabel:"Live",
              headerTitleStyle:{fontFamily:"Quicksand_600SemiBold"},
              headerTitleAlign:'center',
              tabBarIcon: ({focused}) => {
                const iconimg = focused ? require('../assets/liveIcon.png') : require('../assets/liveIcon.png')
                return(
                        <Image 
                source={iconimg}
                style={{height:40,width:40}}
                />
                )
              }
            }}
          />
          <Tab.Screen
            name="Profile" 
            component={ProfileScreen}
            options={{
              headerShown:false,
              tabBarLabel:"Profile",
              headerTitleStyle:{fontFamily:"Quicksand_600SemiBold"},
              headerTitleAlign:'center',
              tabBarIcon: ({focused}) => {
                const iconimg = focused ? require('../assets/profileIcon.png') : require('../assets/profileIcon.png')
                return(
                        <Image 
                source={iconimg}
                style={{height:40,width:40}}
                />
                )
              }
            }}
          />
        </Tab.Navigator>
      )
    }

export default TabNavigator;