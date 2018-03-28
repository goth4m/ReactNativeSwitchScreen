import React, { Component } from 'react';
import {View,StyleSheet,Text}from'react-native';
class HomeScreen extends Component{
    static navigationOptions = {
        title: 'HomeScreen',
      };
    render(){
        return(
            <View style={{backgroundColor:'#ffffff',flex:1}}>
            <Text>Home</Text>
            </View>
        );
    }
}
export default HomeScreen;