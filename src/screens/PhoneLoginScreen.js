import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PhoneLoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Welcome Text */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
          Welcome to TATA <Text style={styles.deliveryText}>Delivery</Text>
        </Text>
      </View>

      {/* Image */}
      <Image
        source={require('../../assets/boy.svg')} // Replace with your image path
        style={styles.image}
        resizeMode="contain"
      />

      {/* Rectangle Container */}
      <View style={styles.rectangleContainer}>
        <Image
          source={require('../../assets/logo.svg')} // Replace with your image path
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.signContainer}>
          <Text style={styles.signText}>Sign Up or Log In</Text>
        </View>

        {/* Phone Number Input */}
        <TextInput
          style={styles.phoneInput}
          placeholder="+91"
          placeholderTextColor="#FFF"
          keyboardType="phone-pad"
        />

        {/* Get OTP Button */}
        <TouchableOpacity style={styles.otpButton} onPress={() => navigation.navigate('Otp')} >
          <Text style={styles.otpButtonText}   onPress={() => navigation.navigate('Otp')}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  backArrow: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%', // Takes 10% of the screen height
    marginTop: 60, // Adjust as needed
  },
  welcomeText: {
    fontSize: 24,
    color: 'black',
  },
  deliveryText: {
    color: 'red',
  },
  image: {
    width: '100%',
    height: '40%', // Takes 40% of the screen height
    marginTop: 20,
  },
  rectangleContainer: {
    backgroundColor: '#011339',
    height: '40%', // Takes 40% of the screen height
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 150, // Adjust the size as needed
    height: 70,
  },
  signContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  signText: {
    color: 'white',
    fontSize: 18,
  },
  phoneInput: {
    marginTop: 20,
    width: '80%',
    height: '10%', // Takes 10% of the rectangle container height
    backgroundColor: '#23395d',
    borderRadius: 15,
    paddingHorizontal: 16,
    color: '#FFF',
    fontSize: 16,
  },
  otpButton: {
    marginTop: 20,
    width: '80%',
    height: '10%',
    backgroundColor: '#A09DA6',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  otpButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PhoneLoginScreen;
