import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../src/screens/Home'
import { Cadastro } from '../src/screens/Cadastro';

const Stack = createStackNavigator();

export function Navigation() {
  return ( 
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen 
        name='home' component={Home} options={{ gestureEnabled: false }}>
        </Stack.Screen>

        <Stack.Screen 
        name='cadastro' component={Cadastro}></Stack.Screen>    
        </Stack.Navigator>
  );
}