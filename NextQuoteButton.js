import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

import PropTypes from 'prop-types';

 export default class NextQuoteButton extends Component{
  render() {
    return(
      <TouchableOpacity style={ styles.button } onPress={this.props.onPress}>
        <Text style={ styles.buttonText }>Next Thought</Text>
      </TouchableOpacity>
    )
  }
 }

 const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color:'#FFFFFF',
    fontSize: 18,
  },
 })

NextQuoteButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}
