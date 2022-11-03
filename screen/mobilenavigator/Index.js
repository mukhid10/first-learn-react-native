import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../HomeScreen/index';
import ProfileScreen from '../ProfileScreen/index';
import SettingScreen from '../SettingScreen/index';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        component={HomeScreen}
        name="HomeScreen"
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={SettingScreen} name="SettingScreen" />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Icon name="home-outline" color={'tomato'} size={25} />
          ),
        }}
        component={HomeStack}
        name="Home"
      />
      <Tab.Screen component={SettingStack} name="Setting" />
      <Tab.Screen component={ProfileStack} name="Profile" />
    </Tab.Navigator>
  );
};

export default TabNavigator;
