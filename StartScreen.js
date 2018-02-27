import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Quote from './Quote'
const zenImage = require('./assets/zen.png')

type Props = {};
export default class StartScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.props.onStart}>
            <Image source={zenImage} style={styles.buttonImage}></Image>
          <Text style={styles.readyText}>I'm ready to relax...</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889DAD',
  },
  readyText: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#FFFFFF',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#889DAD',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  }, 
  buttonImage: {
    width: 200,
    height: 200,
  }
});

