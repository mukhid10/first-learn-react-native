import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const index = ({navigate, route}) => {
  const navigation = useNavigation();
  console.log('route', route);
  return (
    <View>
      <Text>Ini Profile Screen</Text>
    </View>
  );
};

export default index;
