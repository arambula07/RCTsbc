import React, {Component} from 'react'
import {
  View,
  Text,
} from 'react-native'

import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'
import styles from './calculatorStyles'

import {calcTotal} from '../../utils/calculatorHelper'

export default class Calculator extends Component {
  static navigationOptions = {
    title: ({ state }) => `Chat with`,
    tabBar: {
      label: 'Calculator',

      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Icon
          name='dollar'
          type='font-awesome'
          color={tintColor}
        />
      ),
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      odds: '110',
      wagerAmount: null,
      winningTotal: '',
      hasBeenCalculated: false
    };
    this.calculateWinnings = this.calculateWinnings.bind(this)
  }
  calculateWinnings() {

    this.setState({
      winningTotal: calcTotal(this.state.odds, this.state.wagerAmount),
      hasBeenCalculated: true
    })
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
          backgroundColor="#27ae60"
          disabled={!this.state.wagerAmount}
          onPress={this.calculateWinnings}
        />

        {this.renderTotal()}

      </View>
    );
  }
}