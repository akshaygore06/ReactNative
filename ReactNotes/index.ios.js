/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  Navigator,
  View
} from 'react-native';

import Homescreen from './Component/Homescreen.js';
import NoteScreen from './Component/NoteScreen.js';
import SimpleButton from './Component/SimpleButton.js';

 var NavigationBarRouteMapper = {
   LeftButton: function(route,navigator,index,navState){
      switch (route.name) {
         case 'createNote':
           return(
             <SimpleButton
               onPress = {()=> navigator.pop()}
                customText ={'Back'}
             />

           );
         default:
            return null;

      }
   },
   RightButton: function(route,navigator,index,navState){
    switch (route.name) {
       case 'home':
       return (
          <View style={styles.container}>
             <SimpleButton
                onPress={()=> {navigator.push({
                   name:'createNote'
                });
             }}
                customText ={'Create Note'}
             />
          </View>
       );
         //  break;
       default:
         return null;
    }
   },
   Title: function(route,navigator,index,navState){
      switch (route.name) {
         case 'home':
            return(
               <Text>
                  React N0tes
               </Text>
            );
            case 'createNote':
            return(
               <Text>
                  Create N0tes
               </Text>
            );

      }
   },

};



export default class ReactNotes extends Component {
  render() {
    return (
      <Navigator
         initialRoute={{name: 'home'}}
         renderScene={this.renderScene}
         navigationBar={
            <Navigator.NavigationBar
               routeMapper = { NavigationBarRouteMapper }
               />
         }

         />

   );
}



renderScene(route , navigator) {
   switch (route.name){
      case 'home':
          return (
             <Homescreen />
          );
       case 'createNote':
          return(
            <NoteScreen/>
          );
   }

 // Alert.alert(router.name);
}




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
