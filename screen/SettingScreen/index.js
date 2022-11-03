import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const index = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Text>Ini Setting Screen</Text>
    </View>
  );
};

export default index;
