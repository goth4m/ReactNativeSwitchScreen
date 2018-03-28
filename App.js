import React, { Component } from 'react';
import {
  View,StyleSheet,
}from 'react-native';
import{StackNavigator} from 'react-navigation'
import LoginScreen from './screens/LoginScreen'

import HomeScreen from './screens/HomeScreen'


const AppNavigator=StackNavigator({
  LoginScreen:{screen: LoginScreen},  
  HomeScreen:{screen: HomeScreen},
})

export default class App extends Component{
  render(){
    return(
      <AppNavigator navigate="HomeScreen"/>
    );
  }
}
