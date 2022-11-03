import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const index = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Halo ini HomeScreen</Text>
      <TouchableOpacity
        style={{backgroundColor: 'green'}}
        onPress={() =>
          navigation.navigate('ProfileScreen', {title: 'title dari parameter'})
        }>
        <Text>go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
