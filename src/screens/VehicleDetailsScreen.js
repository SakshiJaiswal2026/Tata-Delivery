import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const VehicleDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    {/* Back Arrow */}
    <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={24} color="black" />
    </TouchableOpacity>

    {/* Additional Text */}
    <Text style={styles.title}>Vehicle Details</Text>
    <Text style={styles.subtitle}>
    Enter details of the vehicle that you will use for
Delivery  tasks and orders

    </Text>
    
         <Text style={styles.inputLabel}>Vehicle model</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Bajaj pulsor 220cc "
          keyboardType="default"
        />
         <Text style={styles.inputLabel}>Vehicle number</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g.- KA04-gh-1111"
          keyboardType="default"
        />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('bankaccount')}>
          <Text style={styles.buttonText}>Submit and Next</Text>
        </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
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
  rectangleBox: {
    width: '100%',
    height:'30%',
    padding: 16,
    backgroundColor: '#D9D9D9', // Light grey background
    borderRadius: 10, // Corner radius
    marginBottom: 20,
    alignItems: 'center', // Center align content
    justifyContent:'center'
    
  },
  rectangleText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  btn :{
    borderColor: '#F0F0F0', 
    width:'30%',
    color:'white',
    backgroundColor:'green',
    borderRadius:10,
    marginTop:20,
  },
  button: {
    backgroundColor: '#2F82CE',
    marginTop:500,
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
});

export default VehicleDetailsScreen;
