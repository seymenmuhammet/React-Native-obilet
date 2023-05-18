import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  Profile,
  Explore,
  Search,
  Travels,
  Account,
  Help,
} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={navigationStrings.HOME}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            height: 55,
            paddingHorizontal: 10,
            backgroundColor: '#ECECEC',
            position: 'absolute',
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === navigationStrings.HOME) {
              iconName = 'search1';
              return <AntDesign name={iconName} size={25} color={color} />;
            }
            if (route.name === navigationStrings.TRAVELS) {
              iconName = 'rightcircle';
              return <AntDesign name={iconName} size={25} color={color} />;
            }
            if (route.name === navigationStrings.HELP) {
              iconName = 'help-circle-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === navigationStrings.ACCOUNT) {
              iconName = 'account-circle-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}>
        <Tab.Screen name={navigationStrings.HOME} component={Home} options={{tabBarLabelStyle:{fontFamily:'tahoma', fontSize:14}}} />
        <Tab.Screen name={navigationStrings.TRAVELS} component={Travels} options={{tabBarLabelStyle:{fontSize:14}}} />
        <Tab.Screen name={navigationStrings.HELP} component={Help} options={{tabBarLabelStyle:{fontSize:14}}} />
        <Tab.Screen name={navigationStrings.ACCOUNT} component={Account} options={{tabBarLabelStyle:{fontSize:14}}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
