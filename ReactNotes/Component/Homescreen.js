import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Homescreen extends Component {
   render() {
      return(
         <View style={styles.container}>
            <Text>
               This is a home screen.
            </Text>
         </View>
      );
   }
}
var styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});
