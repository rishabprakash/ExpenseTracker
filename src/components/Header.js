import
 React from 'react';
import 
{ View, Button, StyleSheet }  from 'react-native';

const   
Header
 = 
 ({   navigation, 
  transactions }) => {
  return (
       <View 
       style={styles.container}>
        <Button

          title="Home"            onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button

          title="Spending"    onPress={() => navigation.navigate('Transactions', { transactions })}
      />
      <Button
        title="Chart
        "
        onPress={() =>
           navigation.navigate('Chart', { transactions })}
        />
       </View>
    );
} ;

const 
styles 
=
 StyleSheet.create({

      container: {
        flexDirection: 'row',
   
        justifyContent: 'space-around',
       width: '100%',
    position: 'absolute',
       top: 0,
    
       paddingTop: 40,
       backgroundColor: '#f8f8f8',
   },
} ) ;

export default  Header;
