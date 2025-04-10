import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('PhoneLogin');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.svg')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#011339', // Blue background color
  },
  logo: {
    width: 200, // Adjust the size as needed
    height: 70, // Adjust the size as needed
  },
});

export default WelcomeScreen;