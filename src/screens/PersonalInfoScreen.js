import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PersonalInfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Additional Text */}
      <Text style={styles.title}>Personal Information</Text>
      <Text style={styles.subtitle}>
        Enter the details below so we can get to know and serve you better
      </Text>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Primary mobile number</Text>
        <TextInput
          style={styles.input}
          placeholder="+91123-456-7890"
          keyboardType="phone-pad"
        />
         <Text style={styles.inputLabel}>Secondary  mobile number Optional</Text>
        <TextInput
          style={styles.input}
          placeholder="+91123-456-7890"
          keyboardType="phone-pad"
        />
         <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Manjunath"
          keyboardType="default"
        />
         <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Kalyan"
          keyboardType="default"
        />
         <Text style={styles.inputLabel}>Father's Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Suresh Sharma"
          keyboardType="default"
        />
         <Text style={styles.inputLabel}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 09-08-2009"
          keyboardType="default"
        />
         <Text style={styles.inputLabel}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Gurgoan"
          keyboardType="default"
        />
         <Text style={styles.inputLabel}>Complete Address</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 45/67 Gt Road chak banglore"
          keyboardType="default"
        />
         <Text style={styles.inputLabel}>Language you Know</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. English,Hindi"
          keyboardType="default"
        />
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('personaldoc')}>
          <Text style={styles.buttonText}>Submit and Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'white',
  },
  backArrow: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60, // Adjust as needed
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#D9D9D9',
  },
  input: {
    height: 40,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2F82CE',
    marginTop:30,
    width: '100%',
    height:70,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Drop shadow for Android
    shadowColor: '#000', // Drop shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default PersonalInfoScreen;
