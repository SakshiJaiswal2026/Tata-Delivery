import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RegistrationScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      
      {/* Rectangle Container */}
      <View style={styles.rectangleContainer}>
        {/* Back Arrow */}
        <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
        {/* Text and Image */}
        <View style={styles.contentContainer}>
          {/* Text */}
          <View style={styles.textContainer}>
            <Text style={styles.TATAtext}>
              TATA <Text style={styles.Deliverytext}>Delivery</Text>
            </Text>
            <Text style={styles.subText}>
              Just a few more steps to complete and then you can start earning with  Delivery
            </Text>
          </View>

          {/* Scooter Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/scooter.png')} // Replace with your image path
              style={styles.scooter}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

         {/* Pending Document and Button */}
         <View style={styles.pendingContainer}>
        <Text style={styles.pendingText}>Pending Document</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('personalinfo')}>
          <Text style={styles.buttonText}>Personal Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('personaldoc')} >
          <Text style={styles.buttonText}>Personal Document</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('emergencycontact')}>
          <Text style={styles.buttonText}>Emergency Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('vechiledetail')}>
          <Text style={styles.buttonText}>Vechile Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('bankaccount')}>
          <Text style={styles.buttonText}>Bank Account Details</Text>
        </TouchableOpacity>
      </View>
         
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#DDECFA',
  },
  rectangleContainer: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white', // Grey color
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backArrow: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  textContainer: {
    width: '50%',
    padding: 10,
  },
  TATAtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  Deliverytext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  subText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
  imageContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scooter: {
    width: '50%', // Adjust the size as needed
    
  },
  pendingContainer: {
    flex: 1,
    padding: 16,
  },
  pendingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    marginTop:10,
    width: '100%',
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
    color: 'black',
  },
});

export default RegistrationScreen;
