import React, {Component} from 'react'
import {
  View,
  Text,
} from 'react-native'

import Calculator from '../../components/Calculator'
export default class CalculatorTab extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(newState) {
    this.props.screenProps.addRecentBet(newState, 'single')
  }

  render() {
    return (
      <Calculator bet={{
        wagerAmount: null,
        winningTotal: null,
        odds: '-110'
      }} onSubmit={this.onSubmit}/>
    );
  }
}
