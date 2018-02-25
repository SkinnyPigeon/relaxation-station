import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Navigator } from 'react-native-deprecated-custom-components'

import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'
const { quotes } = require( './quotes.json' )


type Props = {};
export default class App extends Component<Props> {
  render() {
    const quote = quotes[2]
    return (
      <Navigator
        initialRoute={{ name: 'StartScreen' }}
        renderScene={( route, navigator ) => {
          switch( route.name ) {
            case 'StartScreen':
              return <StartScreen onStart={() => navigator.push({ name:'QuoteScreen' })}/>
            case 'QuoteScreen':
              return <QuoteScreen text={quote.text} source={quote.source}/>
          }
        }}
      />
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
