import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PersonalDocumentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
       {/* Additional Text */}
       <Text style={styles.title}>Personal Document</Text>
      <Text style={styles.subtitle}>
      Upload  focused photos of below documents for
      faster verification
      </Text>

      <View style={styles.pendingContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('pancard')}>
          <Text style={styles.buttonText}>PAN Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('aadharcard')} >
          <Text style={styles.buttonText}>Aadhar Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('driving')}>
          <Text style={styles.buttonText}>Driving Licence</Text>
        </TouchableOpacity>
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
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
  pendingContainer: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: 'white',
    marginTop:10,
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    paddingLeft :10,
    elevation: 5, // Drop shadow for Android
    shadowColor: '#000', // Drop shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default PersonalDocumentScreen;
