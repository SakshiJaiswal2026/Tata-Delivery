// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import PhoneLoginScreen from './src/screens/PhoneLoginScreen';
import OtpScreen from './src/screens/OtpScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import PersonalDocumentScreen from './src/screens/PersonalDocumentScreen'
import PersonalInfoScreen from './src/screens/PersonalInfoScreen';
import PanCardScreen from './src/screens/PanCardScreen';
import AadharCardScreen from './src/screens/AadharCardScreen';
import DrivingLicense from './src/screens/DrivingLicense';
import EmergencyContactScreen from './src/screens/EmergencyContactScreen';
import VehicleDetailsScreen from './src/screens/VehicleDetailsScreen';
import BankAccountScreen from './src/screens/BankAccountScreen';
import AccountConfirmationScreen from './src/screens/AccountConfirmationScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import TermsConditionScreen from './src/screens/TermsConditionScreen';
import PrivacyScreen from './src/screens/PrivacyScreen';
import AskForLeaveScreen from './src/screens/AskForLeaveScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"   screenOptions={{
    headerShown: false
  }} >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
          
        />
        <Stack.Screen
          name="PhoneLogin"
          component={PhoneLoginScreen}
          options={{ title: 'Phone Login' }}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{ title: 'OTP Verification' }}
        />
          <Stack.Screen
          name="register"
          component={RegistrationScreen}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="personalinfo"
          component={PersonalInfoScreen}
          
        />
         <Stack.Screen
          name="personaldoc"
          component={PersonalDocumentScreen}
          
        />
        <Stack.Screen
          name="pancard"
          component={PanCardScreen}
          
        />
         <Stack.Screen
          name="aadharcard"
          component={AadharCardScreen}
          
        />
        <Stack.Screen
          name="driving"
          component={DrivingLicense}
          
        />
         <Stack.Screen
          name="emergencycontact"
          component={EmergencyContactScreen}
          
        />
        <Stack.Screen
          name="vechiledetail"
          component={VehicleDetailsScreen}
          
        />
         <Stack.Screen
          name="bankaccount"
          component={BankAccountScreen}
          
        />
          <Stack.Screen
          name="accountconfirm"
          component={AccountConfirmationScreen}
          
        />
          <Stack.Screen
          name="home"
          component={HomeScreen}
          
        />
        <Stack.Screen
        name="myaccount"
        component={AccountScreen}
        />
         <Stack.Screen
        name="terms"
        component={TermsConditionScreen}
        />
         <Stack.Screen
        name="privacy"
        component={PrivacyScreen}
        />
         <Stack.Screen
        name="askforleave"
        component={AskForLeaveScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;