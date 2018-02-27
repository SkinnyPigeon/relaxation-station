import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  LayoutAnimation,
} from 'react-native'

import PropTypes from 'prop-types'
import Quote from './Quote'
import NextQuoteButton from './NextQuoteButton'

const backgroundImage = require( './assets/Background.png' )
const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300, 
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
  },
}

type Props = {};
export default class QuoteScreen extends Component<Props> {
  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil)
  }
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.container}>
          <Quote
            key={this.props.quoteId} 
            quoteText={this.props.text} 
            quoteSource={this.props.source} />
          <NextQuoteButton onPress={this.props.onNextQuotePress}/> 
        </View>
      </ImageBackground>
    )
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  onNextQuotePress: PropTypes.func.isRequired,
  quoteId: PropTypes.number.isRequired,
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

