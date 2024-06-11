import React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';

export default function App() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#222222',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <stack.Screen name="Details" component={Details} options={{ title: 'Details' }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
