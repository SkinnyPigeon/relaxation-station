import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import Quote from './Quote'

const zenImage = require('./assets/zen.png')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      {/*<Navigator
        initialRoute={{ name: 'StartScreen'}}
        renderScene={(route, navigator) => {
          return (
          )
        }}
      />*/}
      <View style={styles.container}>
        { /*<TouchableOpacity style={styles.button} onPress={() => { alert('I was pressed!')}}>
          <Image source={zenImage} style={styles.buttonImage}></Image>
        </TouchableOpacity>
        <Text style={styles.readyText}>I'm ready to relax...</Text> */}
        <Quote quoteText='Amazing Quote' quoteSource='- Great Source'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#859A9B',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  }, 
  buttonImage: {
    width: 200,
    height: 200,
  }
});
