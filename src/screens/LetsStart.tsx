/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';

const LetsStart = ({ route, navigation }) => {
  const [inputCountryCode, setCountryCode] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');

  const handleSubmitButton = () => {
    if (inputCountryCode.length<=2 && phoneNo.length !== 10) {
      Alert.alert('Please enter a valid phone number');
    } else {
      navigation.navigate('ValidateOTP', { countryCode : inputCountryCode, phoneNumber: phoneNo });
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* <LottieView source={require('../assets/loginlottie.json')} autoPlay loop /> */}
        <Image
          style={styles.loginImage}
          source={require('../assets/images/4957136.jpg')}
        />
        <Text style={styles.loginTxt}>You Are All Set!</Text>
        <Text style={styles.loremispum}>
          Welcome to The Family.
        </Text>
        <Text style={styles.regText}>
          Your registration has been verified successfully.
        </Text>

        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.swipeButton}>Swipe the button below to start working wih us.</Text>
          <View style={styles.phoneContainer}>
          </View>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitButton}>
          <Text style={styles.touchableTextButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // <-- Add this
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loginImage: {width: 270, height: 270, marginTop: 30},
  loremispum: {
    fontSize: 21,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    fontWeight:'bold',
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
  },
  regText:{
    flex:1,
    fontSize:18,
    fontFamily: 'Lato-Regular',
    marginStart:20,
    marginEnd:20,
    marginTop:40,
    textAlign:'center',
  },
  swipeButton: {fontSize:15, textAlign:'center', marginStart:40, marginEnd:40},
  phoneContainer: {flexDirection: 'row'},
  loginTxt: {
    color:'blue',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    marginTop: 10,
  },
  inputCountryCode: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1.5,
    marginTop: 10,
    marginEnd: 10,
    width: '15%',
  },
  inputPhoneNo: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1.5,
    marginTop: 10,
    width: '70%',
  },
  touchableTextButton: {color: 'white', fontSize: 19},
  submitButton: {
    backgroundColor: 'blue',
    fontSize:15,
    borderRadius: 10,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    fontFamily:'Lato-Regular',
    alignItems: 'center',
    marginTop: 10,
    marginBottom:40,
  },
  aaa: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default LetsStart;
