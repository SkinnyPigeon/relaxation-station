import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
  
import Quote from './Quote'

type Props = {};
export default class QuoteScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Quote quoteText="Amazing quote!" quoteSource="- Great Source!" /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
});

