import React, {Component} from 'react';
    import {
        AppRegistry,
        StyleSheet,
        Text,
        View,
        TouchableHighlight
    } from 'react-native';

    let randomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 3; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    export default class AwesomeProject extends Component {
        constructor(props) {
            super(props)

             this.onClick = this.onClick.bind(this);

            this.state = {
                backgroundColor: randomColor()
            };

        }
        onClick() {
            console.log('clicked ');
            this.setState({backgroundColor: randomColor()});
        }
        render() {
            return (
                <TouchableHighlight onPress={ this.onClick } style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
                    <View>
                        <Text style={styles.instructions}>
                            <Text style={styles.Tap}> Tap </Text>to Change the Background Color
                        </Text>
                    </View>
                </TouchableHighlight>
            );
        }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: randomColor()
        },
        instructions: {
            color: "white",
            fontSize:15

        },
        Tap: {
           fontWeight: 'bold',
        }
    });
    AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
