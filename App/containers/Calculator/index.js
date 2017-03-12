import React, {Component} from 'react'
import {
  View,
  Text,
} from 'react-native'

import { FormLabel, FormInput, Button } from 'react-native-elements'
import {colors} from '../../theme'
import styles from './calculatorStyles'

import {calcTotal} from '../../utils/calculatorHelper'

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      odds: '-110',
      wagerAmount: null,
      winningTotal: '',
      hasBeenCalculated: false
    };
    this.calculateWinnings = this.calculateWinnings.bind(this)
  }
  calculateWinnings() {
    const newState = {
      ...this.state,
      winningTotal: calcTotal(this.state.odds, this.state.wagerAmount),
      hasBeenCalculated: true
    };
    this.setState(newState);
    this.props.screenProps.addRecentBet(newState, 'single')
  }

  renderTotal() {
    if(this.state.hasBeenCalculated) {
      return (
        <View>
          <FormLabel>Total Winnings</FormLabel>
          <Text style={styles.winningsText}>${this.state.winningTotal}</Text>
        </View>

      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Betting Odds</FormLabel>
        <FormInput
          value={this.state.odds}
          keyboardType="numeric"
          onChangeText={(value) => this.setState({odds: value})}
        />
        <FormLabel>Wager Amount</FormLabel>
        <FormInput
          value={this.state.wagerAmount}
          keyboardType="numeric"
          onChangeText={(value) => this.setState({wagerAmount: value})}
        />

        <Button
          buttonStyle={{marginTop: 20}}
          title='Calculate Winnings'
          backgroundColor={colors.accentColor}
          disabled={!this.state.wagerAmount}
          onPress={this.calculateWinnings}
        />

        {this.renderTotal()}

      </View>
    );
  }
}
