import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import Header from '../components/Header';

import AddExpense from '../components/AddExpense';

import AddIncomeModal from '../components/AddIncomeModal';

const
 HomeScreen 
 =
    ({   navigation }) =>
       {
  const
  
  [transactions,  setTransactions] 
  = useState([]);
  const
   [income, setIncome] = 
   useState(0);
  const 
  [ isExpenseModalVisible,   
    setExpenseModalVisible]
     =
      useState(false);
  const
  
  [isIncomeModalVisible,   setIncomeModalVisible] 
  = useState(false);
  const
   [  totalExpenses,
     setTotalExpenses] 
     =
      useState(0);

  useEffect (() => {
    const 
    total   = transactions
        .filter(transaction   =>   transaction.type   === 
          'expense')
             .reduce((sum,   transaction)   => 
              sum + transaction.amount, 0);
    setTotalExpenses(total);
   }, 
  [transactions]);

  const 
  
  addExpense  
  =
   (amount, 
    description) =>
       {
    setTransactions([...transactions,
       { type:  'expense',
         amount, description }]);
  };

  const
   addIncome
    =
     (amount) => 
      {
    setIncome(  prevIncome => 
      prevIncome + amount);
    setTransactions([...transactions, 
      { type:
         'income', amount,
          description: 'Salary' }]);
    } ;

  const
   renderItem =
    ({ item }) =>
       (
    <View
     style={styles.expenseItem}>
      <Text 
      style={styles.expenseText}>
        {item.description}</Text>
      <Text
       style={styles.expenseText}>
        {item.amount}</Text>
      </View>
    );

  return (
    <View 
    style=
    {styles.container}>
      <Header
       navigation={navigation}
        transactions={transactions} />
      <View 
      style={styles.incomeContainer}>
        <Text 
        style={styles.incomeText}>Total Income: {income}</Text>
       </View>
       <FlatList
         data=
         {transactions.filter(transaction => transaction.type === 'expense')}
        renderItem= {renderItem}
        keyExtractor=
        {  (item, index) => index.toString()}
            contentContainerStyle={styles.expensesList}
      />
      <View 
      style={styles.totalExpensesContainer}>
        <Text 
        style={styles.totalExpensesText}> Total Expenses: 
        {totalExpenses}
        </Text>
      </View>
      <TouchableOpacity 
      style
      =
      {styles.addButtonLeft} 
      onPress={() => setExpenseModalVisible(true)}>
        <Text
         style={styles.buttonText}>
          Add Expense</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.addButtonRight} onPress={() =>
       setIncomeModalVisible(true)}>
            <Text
             style=
             {styles.buttonText}>Add Income</Text>
      </TouchableOpacity>

         <AddExpense
        isVisible={isExpenseModalVisible}
          onClose={() => setExpenseModalVisible(false)}
            Add={addExpense}
      />
        <AddIncomeModal
        isVisible={isIncomeModalVisible}
          onClose={() => 
            setIncomeModalVisible(false)}
       Add
       ={addIncome}
      />
    </View>
    );
};

const 
styles
 = 
 StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,},
      incomeContainer: 
  {
      paddingHorizontal: 20,
    marginBottom:
     10,
    },    
  incomeText: 
  {
    fontSize: 23,
    fontWeight: 
    'bold',
      
    textAlign: 'center',
    
      marginVertical:
       20,
    },
  expensesList: 
  {
    paddingHorizontal: 21,
    paddingBottom: 170, 
  },
  expenseItem:  
  {
     flexDirection:
      'row',
    justifyContent:
     'space-between',
    backgroundColor:
     '#e6f7ff', padding: 10,
    marginVertical: 5,  borderRadius: 5,
    },
  expenseText: {
    fontSize: 16,   fontWeight: '500',
  },
  totalExpensesContainer: {
    position: 'absolute',
    bottom:
     100,
    left: '50%',
    transform: [{ translateX: -100 }],   backgroundColor: 'white',
        padding: 10,
    borderRadius: 5,
        borderColor: 'grey',
     borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  totalExpensesText:
   {
    fontSize: 18,
        fontWeight: 'bold',
  },
  addButtonLeft: 
  {
    position: 'absolute',
      bottom: 70,
      
      left: 20,
    padding: 
    10,
    backgroundColor:
     'green',
    borderRadius: 
    5,
  } ,
  addButtonRight: 
  {
  
    position: 'absolute',
  
    bottom: 70,
       right: 20,
    padding: 10,  backgroundColor: 'blue',
    borderRadius:  5,
  },
  buttonText: 
  {
    color: 'white',
        fontWeight: 'bold',
  },
}  );

export default HomeScreen;
