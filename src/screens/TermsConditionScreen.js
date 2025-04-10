import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome for the back arrow icon

const TermsConditionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      
        <Text style={styles.headerText}>Terms & Conditions</Text>
      </View>
      <Text style={styles.contentText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
         vv Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed sit amet quam a libero tincidunt suscipit. Mauris vitae risus arcu. Donec non efficitur justo, non tincidunt neque. Proin sed eros lacus. Nulla facilisi. Aliquam erat volutpat. Donec commodo sapien at orci sagittis, id pulvinar justo aliquam. Donec varius, felis sit amet volutpat scelerisque, tortor ligula luctus metus, at posuere lorem orci id elit.
         

      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    color:'White',
  },
  title: {
    marginTop: 50, // Adjusting the top margin to position below the back button
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F82CE',
    padding: 15,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft:10,
  },
  contentText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default TermsConditionScreen;
