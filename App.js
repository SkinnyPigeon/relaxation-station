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

  constructor(props) {
    super(props)

    this.state = {
      quoteIndex: 3,
    }
    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this)
  }


  _incrementQuoteIndex() {
    let newIndex

    if( this.state.quoteIndex + 1 === quotes.length ) {
      newIndex = 0
    } else {
      newIndex = this.state.quoteIndex + 1
    }

    this.setState({
      quoteIndex: newIndex,
    })
  }

  render() {
    const quote = quotes[this.state.quoteIndex]
    return (
      <Navigator
        initialRoute={{ name: 'StartScreen' }}
        renderScene={( route, navigator ) => {
          switch( route.name ) {
            case 'StartScreen':
              return <StartScreen onStart={() => navigator.push({ name:'QuoteScreen' })}/>
            case 'QuoteScreen':
              return (<QuoteScreen
                  quoteId={this.state.quoteIndex} 
                  text={quote.text} 
                  source={quote.source}  
                  onNextQuotePress={this._incrementQuoteIndex}
              />)
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
