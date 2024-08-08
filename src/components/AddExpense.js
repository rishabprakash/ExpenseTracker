import React, { useState } from 'react';
import 
{ View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const 
AddExpense = 
({ isVisible, onClose,Add }) => {

  const  [amount, setAmount]  =  useState(' '); 

  const  [description ,   setDescription] =  useState('') ; 
  const   [error ,  setError ] =  useState('' ) ;  

  const
   handleAdd =  ()  =>  {
    const 
    expenseAmount  =  parseFloat( amount ) ;
    if 
    (description  ===  ''  ||  
      isNaN(expenseAmount) || 
      expenseAmount <= 0) {
      
        setError('Fields Can not be empty');
    } 
    else
     {
      Add(expenseAmount,  description ) ;
       setAmount('') ;
        setDescription('') ;
         setError('') ;
       onClose();
    }
  };

         return (
    
          <Modal visible={isVisible} transparent={true}>
     
     
      <View style={styles.modalContainer}>
        
        
        <View
         style= {styles.modalContent}>
        
          <Text
           style = {styles.modalTitle}> Add Expense </Text>
        
             <TextInput
        
        placeholder=" The Amount"
        
        value = { amount}
        
            onChangeText =  { setAmount }
            
        keyboardType="numeric"
            style={[styles.input, error && styles.errorInput]}
         
         />
              {error   &&     
              <Text style={styles.errorText}>{error}
              </Text>   }
            <TextInput
              
              placeholder=" The Description"
            value  =  {description}
            onChangeText  = { setDescription }
            style = {[    styles.input, error && styles.errorInput    ]}
          />
          
          
            {error && 
            
            <Text   
            style={styles.errorText}> {error}
            </Text>}
          <View
           style  = {styles.buttonContainer}>
            <TouchableOpacity 
            style=   {styles.button} 
            onPress={handleAdd}>
             
              <Text style={styles.buttonText}>
                Add
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style =  {styles.button} onPress={onClose}>
              <Text 
              style=  {styles.buttonText}>Cancel
              </Text>
              </TouchableOpacity>
         
            </View>
        
        </View>
      
      </View>
    
        </Modal>
     ) ;
};

const
 styles =
  StyleSheet.create(
    {
    modalContainer:
   {
    flex: 1,
      justifyContent: 'center',
        alignItems: 'center',
      backgroundColor: 'rgba(0,0,0.5,0.5)',
  },

  modalContent: 
  {
        width: 310,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 11,
  },
    modalTitle: 
    {
    fontSize: 19,
    fontWeight:  'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: 
  {
   width: '100%',
      padding: 11,
    borderWidth: 2,
    borderColor: 'gray',
     marginVertical: 13,
    borderRadius: 6,
  }
  ,
  
  errorInput:
   {
      borderColor: 'red',
  },


  errorText:
   {
    color: 'red',

    marginBottom: 11,
  },
  buttonContainer: 
  {
    flexDirection:
     'row',
      justifyContent:
       'space-between',
      marginTop: 22,
  },
  button:
   {
    flex: 1,
      padding: 11,
    marginHorizontal: 7,
      backgroundColor: '#007BFF',
        borderRadius: 6,
      alignItems: 'center',
  } ,
      buttonText:
       {
      color: 'white',
         fontWeight: 'bold',
  }  ,
} ); 

export default AddExpense;
