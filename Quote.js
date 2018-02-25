import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import PropTypes from 'prop-types';

class Quote extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.quoteText}</Text>
        <Text>{this.props.quoteSource}</Text>
      </View>
    )
  }
}
 
Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteSource: PropTypes.string.isRequired
}

export default Quote