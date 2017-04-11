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

import SimpleButton from './Component/SimpleButton.js';
import NoteScreen from './Component/NoteScreen.js';

export default class ReactNotes extends Component {
  render() {
    return (
      <Navigator
         initialRoute={{name: 'home'}}
         renderScene={this.renderScene}

      />

);

}

renderScene(route , navigator) {
   switch (route.name){
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
       case 'createNote':
          return(
             <View style={styles.container}>
                < NoteScreen  />
             </View>

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
