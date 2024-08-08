import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import randomColor from 'randomcolor';
import Header from '../components/Header';

const

screenWidth
 = Dimensions.get('window').width;

const
 Chart   
= ({  
   navigation, route }) => {
  const 
  {   transactions = [] } 
  = route.params || {};

   const 
   expenseData = transactions
    .filter(transaction =>
       transaction.type 
       ===
        'expense')
      .map((expense, index) => ({
      name: 
          expense.description,
       amount: expense.amount,
         color: randomColor(),
         legendFontColor: '#7F7F7F',
         legendFontSize: 16,
      })   );

  return (

      <View
       style={styles.container}>
      <Header 
        navigation={navigation} />
      <View
          style={styles.content}>
     
     
        {expenseData.length > 0 ? 
        (
            <>
             <PieChart
                  data={expenseData}
                width={screenWidth}
                height={220}
              chartConfig={{
                   backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                      borderRadius: 16,
                },
                }}
              accessor="amount"
                backgroundColor="transparent"
              paddingLeft="15"
              absolute
             />
             <View style={styles.legend}>
                {expenseData.map((item, index) => (
                <View key={index} style={styles.legendItem}>
                   <View style={[styles.colorBox, { backgroundColor: item.color }]} />
                    <Text style={styles.legendText}>{item.name}</Text>
                 </View>
               ))}
              </View>
          </>
        ) 
        : 
        (
           <Text>
            No expenses </Text>
        )}
        </View>
    </View>
    );
  }  ;  

const 
styles 
=
 StyleSheet.create({
 
   container: {
    
    flex: 1,
   },
  content: {


    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 
    marginTop: 101,
  } ,
  legend: {
     marginTop: 20,
  },
   legendItem: {
    flexDirection: '  row',
      alignItems: 'center',
       marginBottom: 5,
    },
  colorBox: {
      width: 21,
      height: 22,
     marginRight: 10,
  },
  legendText: 
  {
      fontSize: 17,
    },
  text:
   {
  
    fontSize: 18,
  },
  }
)   ;




export default Chart;
