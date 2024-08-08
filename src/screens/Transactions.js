import React from 'react';
import   { View, StyleSheet } from 'react-native';
import 
Header from '../components/Header';
import
 TransactionList from '../components/TransactionList';

const
 Transactions
  
 =
  ({  navigation,   route }) => 
    {
  const
   {   transactions } =
    route.params || { transactions: [] }
    ;

  return (
    <View 
    style={styles.container }>
      <Header 
      navigation={navigation} />
      <View 
      style={styles.content}>
        <TransactionList 
        transactions={transactions} />
      </View>
       </View>
  ) ;
  };

const
 styles 
 = StyleSheet.create(
  {
  container:
   {
    flex: 1,
  },
  content: {
    flex: 1,  marginTop: 101,
    padding: 22,backgroundColor:
     '#f5f5f5',
  },
});

export default 
Transactions;
