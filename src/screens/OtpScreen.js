import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OtpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* OTP Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          We’ve sent a verification code to {'\n'}
          <Text style={styles.phoneNumber}>+9174687362874</Text>
        </Text>
      </View>

      {/* OTP Input Boxes */}
      <View style={styles.otpContainer}>
        <TextInput style={styles.otpInput} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.otpInput} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.otpInput} maxLength={1} keyboardType="numeric" />
        <TextInput style={styles.otpInput} maxLength={1} keyboardType="numeric" />
      </View>

      {/* Other Buttons */}
      <View style={styles.buttonContainer}>
       
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('register')}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'white',
  },
  backArrow: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  messageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    textAlign: 'center',
  },
  phoneNumber: {
    fontWeight: 'bold',
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  otpInput: {
    width: 60,
    height: 60,
    backgroundColor: '#EFF2F9',
    borderRadius: 10,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#011339',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OtpScreen;
