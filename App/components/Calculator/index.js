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
    const bet = this.props.bet || this.props.navigation.state.params.bet;
    const hasBeenCalculated = !!bet.winningTotal;

    this.onSubmit = this.props.onSubmit || this.props.navigation.state.params.onSubmit;
    const {odds, winningTotal, wagerAmount} = bet;
    this.state = {
      odds,
      winningTotal,
      wagerAmount,
      hasBeenCalculated,
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
    this.onSubmit(newState)
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
