import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native'

import PropTypes from 'prop-types'
import Quote from './Quote'
const backgroundImage = require( './assets/Background.png' )

type Props = {};
export default class QuoteScreen extends Component<Props> {
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.container}>
          <Quote quoteText={this.props.text} quoteSource={this.props.source} /> 
        </View>
      </ImageBackground>
    )
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

