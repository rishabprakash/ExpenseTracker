import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const
 LoginScreen 
 =
  ({ navigation }) =>
     {
  const
   [  email,   setEmail] = 
   useState('');
  const   
  [ password,   setPassword]  =  useState('');

  const 
  handleLogin 
  =
   () =>
     {
        navigation.navigate('HomeScreen');
    };

  return (
    <View
        style={styles.container}>
      <Text
       style={styles.title}>New to Expense Calculator?</Text>
      <TextInput


style={styles.input}
             placeholder="Email"
          value={email}
             onChangeText={setEmail}
          />
      <TextInput

style={styles.input}
           placeholder="Password"    value={password}
        onChangeText={setPassword}   secureTextEntry
      />
      <Button 
      title="Login" onPress={handleLogin} />
      </View>
    ) ;
} ;

const 
styles 
=
 StyleSheet.create({
     container: {
      flex: 1,
        justifyContent: 'center', padding: 16,
  },
  title: 
  
  {
    fontSize: 26,
    marginBottom:
     20,textAlign: 'center',
  },
  input:
   {
    height: 40,
    borderColor:
     'gray',
    borderWidth: 1,  marginBottom: 12,
        paddingHorizontal: 8,
  },
} );  

export
 default LoginScreen;
