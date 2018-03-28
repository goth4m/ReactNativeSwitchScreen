import React, { Component } from 'react';
import {View,StyleSheet,Text,Button}from'react-native';
class HomeScreen extends Component{
    static navigationOptions = {
        title: 'HomeScreen',
      };
    render(){
        var{params}=this.props.navigation.state;
        return(
            <View style={{backgroundColor:'#ffffff',flex:1}}>
            <Text>Hello {params.name} Home</Text>
            <Button style={{backgroundColor:'#000000',width: 100,height: 40,}} onPress={()=>this.props.navigation.goBack()} title="Back to login"/>
            </View>
        );
    }
}
export default HomeScreen;