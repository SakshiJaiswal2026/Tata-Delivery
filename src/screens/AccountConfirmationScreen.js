import React, { useEffect } from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';

const AccountConfirmationScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('home');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/greentick.svg')} style={styles.logo} />
      <Text style={styles.title}>Account Created</Text>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Blue background color
  },
  logo: {
    width: 150, // Adjust the size as needed
    height: 150, // Adjust the size as needed
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60, // Adjust as needed
    marginBottom: 10,
  },
});

export default AccountConfirmationScreen;