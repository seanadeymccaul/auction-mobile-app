import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import AccountScreen from '../screens/Account';


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
              headerShown:false,
              tabBarLabel:"Home",
              headerTitleStyle:{fontFamily:"Quicksand_600SemiBold"}/*,
              tabBarIcon: ({focused}) => {
                const iconimg = focused ? require('../assets/home-icon.png') : require('../assets/home-icon.png')
                return(
                        <Image 
                source={iconimg}
                style={{height:30,width:30}}
                />
                )
              }*/
            }}
          />
          <Tab.Screen
            name="Account" 
            component={AccountScreen}
            options={{
              headerShown:false,
              tabBarLabel:"Profile",
              headerTitleStyle:{fontFamily:"Quicksand_600SemiBold"},
              headerTitleAlign:'center'/*,
              tabBarIcon: ({focused}) => {
                const iconimg = focused ? require('../assets/profile-icon.png') : require('../assets/profile-icon.png')
                return(
                        <Image 
                source={iconimg}
                style={{height:40,width:40}}
                />
                )
              }*/
            }}
          />
        </Tab.Navigator>
      )
    }

export default TabNavigator;