import React, { useState } from 'react';

import   { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const   AddIncomeModal  
= 
({   isVisible,   onClose, Add }) => {
  const 
  [ amount,  setAmount] 
  = useState('');
  const 
   [error, setError] = useState('');

  const 
  handleAdd =
   () =>
     {
    
      const
   incomeAmount = parseFloat(amount);
    if 
      (isNaN(incomeAmount) ||incomeAmount <= 0) {
        setError('Field cant be empty');
    } 
    else 
    {
       Add(incomeAmount);
        setAmount('');
            setError('');
        onClose();
      
      }
  }
  ;

  return (
       <Modal 
       visible={isVisible} transparent={true}>
      <View
       style ={styles.modalContainer}>
        <View 
        style={styles.modalContent}>
          <Text 
          style={styles.modalTitle}>Add Income</Text>
          <TextInput            placeholder="Amount"
              value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                style={[styles.input, error && styles.errorInput]}
          />
          {error
           &&
            <Text 
            style   = {styles.errorText}>{error}</Text>}
          <View 
          style={styles.buttonContainer}>
            <TouchableOpacity
             style=
             {styles.button} 
             onPress={handleAdd}>
              <Text 
              style=
              {styles.buttonText}>
                Add
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            
            style
            =
            
            {styles.button} 
            onPress={onClose}>
              <Text 
              style
              =
              {styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
      </Modal>
   );
      };

const 
styles 
=
 StyleSheet.create({
      modalContainer: {
        flex: 1,
    justifyContent:     'center',
    alignItems:   'center',
    backgroundColor:   'rgba(0,0,0,0.5)',
   }   ,
  modalContent:
  
  {
     width: 300,
      padding: 20,
       
      backgroundColor: 'white',
    borderRadius: 10,
    },
  modalTitle:
   {
    fontSize: 18,
      fontWeight: 'bold',
       marginBottom: 10,
          textAlign: 'center',
  
        },
    input: 
  {
    width: '100%',
    padding: 11,
    borderWidth: 2,
      borderColor: 'gray',
    marginVertical: 12,
    borderRadius: 7,
  },
  errorInput: 
  
  {
    borderColor   : 
    'red',
    },
  errorText: 
    {
        color: 
        'red',
        marginBottom: 10,
      },
  buttonContainer:
   {
       flexDirection: 'row',
        
       justifyContent: 'space-between',
    
       marginTop: 20,
    },
  button:
   {
    flex: 1,
       padding: 10,
    marginHorizontal: 5,
         backgroundColor: '#007BFF',
    borderRadius: 5,
    
    alignItems: 'center',
 
  },
  
  buttonText: 
  {
    color
      : 'white',
    fontWeight: 'bold',
   },
}
)
;

export default 
AddIncomeModal;
