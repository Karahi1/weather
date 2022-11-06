import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import News from './screens/News';
import Details from './screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
  
const Tab = createBottomTabNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Weather') {
              iconName = focused 
              ? 'cloudy-night' 
              : 'cloudy-night-outline';
            } else if (route.name === 'News') {
              iconName = focused 
              ? 'newspaper' 
              : 'newspaper-outline';
            } else if (route.name === 'Details') {
              iconName = focused 
              ? 'ellipsis-horizontal-circle' 
              : 'ellipsis-horizontal-circle-outline';
            } 
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: "Today's weather"
          }}
        />
        <Tab.Screen
          name="Weather"
          component={SecondScreen}
          option={{
            title: 'Weather',
            headerTitle: 'Weather'
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          option={{
            title: 'News',
            headerTitle: 'News'
          }}
        />
          <Tab.Screen
          name='Details'
          component={Details}
          option={{
            title: 'Details',
            headerTitle: 'Details'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}