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
// import { RouteProp } from '@react-navigation/native';
// import { RootStackParamList } from '.../App';


const ValidatePhone = () => {
  const [phoneNo, setPhoneNo] = React.useState('');

  const handleSubmitButton = () => {
    if (phoneNo.length !== 10) {
      Alert.alert('Please enter a valid phone number');
    } else {
      Alert.alert('Phone number is valid : ' + phoneNo);
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
        <Text style={styles.loginTxt}>Validate Phone No.</Text>
        <Text style={styles.loremispum}>
          Please enter the 5 digit OTP sent on your Reg. phone no.
        </Text>

        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.enterPhone}>Enter Phone No. *</Text>
          <View style={styles.phoneContainer}>
            <TextInput
              style={styles.inputCountryCode}
              placeholder="+91"
              maxLength={5}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputPhoneNo}
              placeholder="1234567890"
              value={phoneNo}
              maxLength={10}
              keyboardType="numeric"
              onChangeText={text => setPhoneNo(text)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.submitButton} onPress={handleSubmitButton}>
          <Text style={styles.touchableTextButton}>Validate and Continue</Text>
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
  loginImage: {width: 300, height: 300, marginTop: 50},
  loremispum: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  enterPhone: {marginTop: 50},
  phoneContainer: {flexDirection: 'row'},
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Lato-Thin',
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
  touchableTextButton: {color: 'white', fontSize: 17},
  submitButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  aaa: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default ValidatePhone;
