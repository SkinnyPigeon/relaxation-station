import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import Quote from './Quote'

type Props = {};
export default class QuoteScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Quote quoteText={this.props.text} quoteSource={this.props.source} /> 
      </View>
    )
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
});

