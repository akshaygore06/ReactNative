
import React, { Component } from 'react';
import {
   StyleSheet,
   View,
   Text
} from 'react-native';

export default class NoteScreen extends React.Component{
   render(){
      return(
         <View style={styles.container1}>
            <Text style={styles.note}>
               Create a note!!!!!!
            </Text>
         </View>
      );
   }
}

var styles = StyleSheet.create({
   container1:{
      // flex:2,
      justifyContent:'center',
      alignItems:'center',
      // flex: 1
      backgroundColor: 'orange'
   },
   note: {
      fontWeight:'bold',
      color: 'blue'
   }
});
