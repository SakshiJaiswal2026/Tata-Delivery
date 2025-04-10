import React from 'react';
import { View, Text, Button } from 'react-native';

const HamburgerMenu = ({ navigation }) => {
  return (
    <View>
      <Text>Hamburger Menu</Text>
      <Button title="Go to Terms" onPress={() => navigation.navigate('Terms')} />
    </View>
  );
};

export default HamburgerMenu;
