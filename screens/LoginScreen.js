import React, { Component } from 'react';
import {View,StyleSheet,Text,Button}from'react-native';
class LoginScreen extends Component{
    static navigationOptions = {
        title: 'LoginScreen',
      };
    render(){
        var {navigate}=this.props.navigation;
        return(
            <View style={{backgroundColor:'#ffffff',flex:1}}>
            <Text>Login 2</Text>
            <Button style={{backgroundColor:'#000000',width: 100,height: 40,}} onPress={()=>navigate('HomeScreen',{
                name:"Tuan",
            })} title="Go to home"/>
            </View>
        );
    }
}
export default LoginScreen;