import   React from 'react';
import   {   NavigationContainer }  from '@react-navigation/native';
import   {   createStackNavigator }  from '@react-navigation/stack';
import   HomeScreen  from  '../screens/HomeScreen';
import   Transactions   from   '../screens/Transactions';
import   Chart   from  '../screens/Chart';
import  LoginScreen   from  '../screens/LoginScreen'; 

const 
Stack 
=
 createStackNavigator();

const 
AppNavigator
 
= () => {
  return (
    <NavigationContainer>
          <Stack.Navigator   initialRouteName="LoginScreen">
            <Stack.Screen
                 name  =
            "LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen 
             name="HomeScreen" component={HomeScreen} />
           <Stack.Screen
              name= "Transactions"  component = {Transactions} />
             <Stack.Screen
              name="Chart" component={Chart} />
       </Stack.Navigator>
        </NavigationContainer>
   )  ;
    };

export default AppNavigator;
