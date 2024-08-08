import  React from 'react';
import     { View, Text, FlatList, StyleSheet } from 'react-native';

const 
 TransactionList 
 = 
 ({   transactions }) =>
    {
  const
       renderItem = ({ item }) => (
     <View 
     style  = {[styles.transactionItem,  item.type === 'income'   ?     styles.incomeItem   :  styles.expenseItem]}>
        <Text 
        style=  {styles.description}>
          {item.description}
          </Text>
      <Text 
       style  =
        {styles.amount}>{item.amount}</Text>
      </View>
    ) ;

  return (
      <FlatList
          data
          ={transactions}
      renderItem
      = {renderItem}
      keyExtractor
      ={  (item, index) => index.toString()

      }
          contentContainerStyle=
          {styles.transactionsList}
    />
   )  ;
  } ;  

const
styles
 =
  StyleSheet.create({

     transactionsList: 
  {
      paddingBottom: 23,
  },
      transactionItem:
   {
      flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 17,
      marginVertical: 9,
    borderRadius: 7,
   }  ,
      incomeItem:
       {
        backgroundColor:
         '#d4edda'  , 
   }  ,
  expenseItem:
   {
    backgroundColor:
     '#f8d7da', 
  },
  description: 
  {
      fontSize: 18,
    },
  amount:
   {
      fontSize: 18,
      fontWeight: 
    'bold',
   },

} );

export default  TransactionList;
