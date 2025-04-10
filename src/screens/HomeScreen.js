import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo

const HomeScreen = ({ navigation }) => {
  const [country, setCountry] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [activeTab, setActiveTab] = useState('Orders');

  const handleAcceptPress = () => {
    setIsAccepted(true);
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      {/* Existing code */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter country name"
          value={country}
          onChangeText={(text) => setCountry(text)}
        />
      </View>

      <View style={styles.mapContainer}>
        <Image
          source={require('../../assets/Maps.png')}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <FontAwesome name="user" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Aman Sharma</Text>
        </View>
        <View style={styles.detailItem}>
          <FontAwesome name="map-marker" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.acceptButton,
            isAccepted && styles.acceptButtonActive
          ]}
          onPress={handleAcceptPress}
        >
          <Text style={styles.acceptButtonText}>
            {isAccepted ? 'Accepted' : 'Accept'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer Container */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={[styles.footerItem, activeTab === 'Orders' && styles.activeTab]}
          onPress={() => handleTabPress('Orders')}
        >
          <FontAwesome name="shopping-cart" size={24} color="white" />
          <Text style={[styles.footerText, activeTab === 'Orders' && styles.activeText]}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerItem, activeTab === 'Account' && styles.activeTab]}
          onPress={() => handleTabPress('Account')}
        >
          <FontAwesome name="user" size={24} color="white" />
          <Text style={[styles.footerText, activeTab === 'Account' && styles.activeText]} onPress={() => navigation.navigate('myaccount')}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DDECFA',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  mapContainer: {
    height: '60%',
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    height: '100%',
    width: '100%',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  acceptButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptButtonActive: {
    backgroundColor: 'green',
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '95%',
    height: '8%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  footerText: {
    color: 'black',
    marginLeft: 8,
  },
  activeTab: {
    backgroundColor: '#1a73e8',
  },
  activeText: {
    color: 'white',
  },
});

export default HomeScreen;
