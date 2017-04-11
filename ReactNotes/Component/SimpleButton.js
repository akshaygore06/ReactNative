import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View
} from 'react-native';

export default class SimpleButton extends Component {
   render() {
     return (
        <TouchableOpacity onPress={this.props.onPress}>
          <View>
            <Text style={styles.SimpleButton}>
               {this.props.customText||'Simple Button'}
            </Text>
          </View>
         </TouchableOpacity>

     );
   }

}

SimpleButton.protoTypes = {
   pnPress: React.PropTypes.func.isRequired,
   customText: React.PropTypes.string
};

//
 const styles = StyleSheet.create({
//   cont:{
//      flex: 1,
//      justifyContent: 'center',
//      alignItems: 'center',
//      backgroundColor: 'green',
//
//    },
   SimpleButton: {
      fontWeight:'bold',
      color: 'red'
   }
});
//
// AppRegistry.registerComponent('SimpleButton', () => SimpleButton);
