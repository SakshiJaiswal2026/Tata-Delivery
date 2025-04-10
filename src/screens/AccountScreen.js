import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.headercontainer}>
        <Text style={styles.headerText}>Account Screen</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/profile.png')} // Replace with your profile image path
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <View style={styles.profileDetailItem}>
            <Icon name="person" size={24} color="black" style={styles.icon} />
            <Text style={styles.detailText}>Aman Sharma</Text>
          </View>
          <View style={styles.profileDetailItem}>
            <Icon name="call" size={24} color="black" style={styles.icon} />
            <Text style={styles.detailText}>+91 9999988888</Text>
          </View>
          <View style={styles.profileDetailItem}>
            <Icon name="mail" size={24} color="black" style={styles.icon} />
            <Text style={styles.detailText}>loremipsum@gmail.com</Text>
          </View>
        </View>
      </View>
      <Text style={styles.infoText}>Additional Information</Text>

<TouchableOpacity style={styles.button}>
  <Icon name="map" size={24} color="blue" style={styles.buttonIcon} />
  <Text style={styles.buttonText}>Allotted Area</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
  <Icon name="gift" size={24} color="blue" style={styles.buttonIcon} />
  <Text style={styles.buttonText}>Refer and Earn </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
  <Icon name="chatbubble" size={24} color="blue" style={styles.buttonIcon} />
  <Text style={styles.buttonText}>Support </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('terms')}>
  <Icon name="document-text" size={24} color="blue" style={styles.buttonIcon}  />
  <Text style={styles.buttonText}>Terms & Conditions </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('privacy')} >
  <Icon name="eye" size={24} color="blue" style={styles.buttonIcon} />
  <Text style={styles.buttonText}>Privacy Policy</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('askforleave')}>
  <Icon name="envelope" size={24} color="blue" style={styles.buttonIcon}  />
  <Text style={styles.buttonText}>Ask For Leave</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
  <Icon name="sign-out" size={24} color="blue" style={styles.buttonIcon} />
  <Text style={styles.buttonText}>Logout</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DDECFA',
  },
  backArrow: {
    marginBottom: 20,
  },
  headercontainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profileDetails: {
    
  },
  profileDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop:10,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default AccountScreen;