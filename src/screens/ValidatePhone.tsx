/* eslint-disable eqeqeq */
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
import React, { useRef, useState } from 'react';
// import { RouteProp } from '@react-navigation/native';
// import { RootStackParamList } from '.../App';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ValidatePhone: { countryCode: string; phoneNumber: string };
};

type ValidatePhoneScreenRouteProp = RouteProp<RootStackParamList, 'ValidatePhone'>;
type ValidatePhoneScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ValidatePhone'>;

const ValidatePhone = ({ route, navigation }: { route: ValidatePhoneScreenRouteProp; navigation: ValidatePhoneScreenNavigationProp }) => {
  const [otp, setOtp] = React.useState('');

  const {countryCode} = route.params;
  const {phoneNumber} = route.params;

  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);
  const input5 = useRef<TextInput>(null);
  const input6 = useRef<TextInput>(null);

  const [editableInput1, setEditableInput1] = useState(true);
  const [editableInput2, setEditableInput2] = useState(true);
  const [editableInput3, setEditableInput3] = useState(true);
  const [editableInput4, setEditableInput4] = useState(true);
  const [editableInput5, setEditableInput5] = useState(true);
  const [editableInput6, setEditableInput6] = useState(true);

  const handleSubmitButton = () => {
    if (otp.length!==1) {
    } else {
      // Alert.alert('Please enter a valid phone number'+otp);
    }
    navigation.navigate('LetStart' as never);
  };

  const editNumberImage = () => {
    navigation.pop();
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* <LottieView source={require('../assets/loginlottie.json')} autoPlay loop /> */}
        <Image
          style={styles.loginImage}
          source={require('../assets/images/4957136.jpg')}
        />
        <Text style={styles.loginTxt}>Validate Phone No.</Text>
        <Text style={styles.loremispum}>
          Please enter the 6 digit OTP sent on your Reg. phone no.
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            width: '100%',
          }}>
          <Text
            style={{backgroundColor: '#f6f6f6', padding: 10, borderRadius: 20}}>
            {countryCode} {phoneNumber}
          </Text>
          <TouchableOpacity onPress={editNumberImage}>
            <Image
              style={{width: 20, height: 20, marginStart: 10}}
              source={require('../assets/images/edit.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            marginTop: 20,
            paddingStart: 20,
            paddingEnd: 20,
          }}>
          <View style={styles.pincodeview}>
            <TextInput
              style={{fontSize: 17, fontWeight: 'bold'}}
              maxLength={1}
              keyboardType="numeric"
              ref={input1}
              autoFocus={true}
              onChangeText={(txt)=>{
                if(txt.length == 1){
                  input2.current?.focus();
                }
              }}
            />
          </View>
          <View style={styles.pincodeview}>
            <TextInput
              style={{fontSize: 17, fontWeight: 'bold'}}
              maxLength={1}
              keyboardType="numeric"
              ref={input2}
              onChangeText={(txt2)=>{
                if(txt2.length == 1){
                  input3.current?.focus();
                }else{
                  input1.current?.focus();
                }
              }}
            />
          </View>
          <View style={styles.pincodeview}>
            <TextInput
              style={{fontSize: 17, fontWeight: 'bold'}}
              maxLength={1}
              keyboardType="numeric"
              ref={input3}
              onChangeText={(txt3)=>{
                if(txt3.length == 1){
                  input4.current?.focus();
                }else{
                  input2.current?.focus();
                }
              }}
            />
          </View>
          <View style={styles.pincodeview}>
            <TextInput
              style={{fontSize: 17, fontWeight: 'bold'}}
              maxLength={1}
              keyboardType="numeric"
              ref={input4}

            onChangeText={(txt4)=>{
              if(txt4.length == 1){
                input5.current?.focus();
              }else{
                input3.current?.focus();
              }
            }}
            />
          </View>
          <View style={styles.pincodeview}>
            <TextInput
              style={{fontSize: 17, fontWeight: 'bold'}}
              maxLength={1}
              keyboardType="numeric"
              ref={input5}
              onChangeText={(txt5)=>{
                if(txt5.length == 1){
                  input6.current?.focus();
                }else{
                  input4.current?.focus();
                }
              }
              }
            />
          </View>
          <View style={styles.pincodeview}>
            <TextInput
              style={{fontSize: 17, fontWeight: 'bold'}}
              maxLength={1}
              keyboardType="numeric"
              ref={input6}
              onChangeText={(txt6)=>{
                if(txt6.length == 1){
                  setOtp(txt6);
                }else{
                  input5.current?.focus();
                }
              }}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
          <Text>Didn't Recieve Code?</Text>
          <Text style={{color: 'blue', fontWeight: 'bold', marginStart: 5}}>
            Resend
          </Text>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitButton}>
          <Text style={styles.touchableTextButton}>Validate and Continue</Text>
          <Image style={{width: 20, height: 20, marginStart: 10, tintColor: 'white',}}
               source={require('../assets/images/next.png')}/>
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
  loginImage: {width: 270, height: 270, marginTop: 50},
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
  touchableTextButton: { color: 'white', fontSize: 19, marginLeft: 15},
  submitButton: {
    flex:1,
    flexDirection:'row',
    backgroundColor: 'blue',
    borderRadius: 10,
    width: '90%',
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  aaa: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  pincodeview: {
    borderColor: 'blue',
    borderRadius: 10,
    borderWidth: 0.8,
    width: 45,
    height: 50,
    paddingStart: 12,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default ValidatePhone;
