import React, {Component} from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import uuid from 'uuid/v4'

import styles from './paylayStyles'

import {calcParlay} from '../../utils/calculatorHelper'

import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class Parlay extends Component {

  constructor(props) {
    super(props);
    this.addPick = this.addPick.bind(this);
    this.renderPicks = this.renderPicks.bind(this);
    this.calculateWinnings = this.calculateWinnings.bind(this);
    const bet = this.props.bet || this.props.navigation.state.params.bet;
    const hasBeenCalculated = !!bet.winningTotal;

    this.onSubmit = this.props.onSubmit || this.props.navigation.state.params.onSubmit;
    const {odds, winningTotal, wagerAmount, picks} = bet;

    this.state = {
      picks:  picks || [
        Parlay.generatePick()
      ],
      wagerAmount,
      winningTotal,
      hasBeenCalculated
    }
  }

  static generatePick() {
    return {id: uuid(), odds: "0"}
  };

  renderPicks() {
    return this.state.picks.map((pick) => {
      return (
        <View key={pick.id}>
          <FormLabel>Betting Odds</FormLabel>

          <FormInput
            value={pick.odds}
            keyboardType="numeric"
            onChangeText={(value) => this.editPick(pick.id,  value)}
          />
        </View>
      )
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

  editPick(id, value) {
    const newPicks = this.state.picks.map(pick => {
      if(pick.id === id) {
        return Object.assign({}, pick, {odds: value})
      }
      return pick
    });

    this.setState({picks: newPicks})
  }

  addPick() {
    this.setState({picks: [...this.state.picks, Parlay.generatePick()]})
  }

  calculateWinnings() {
    const parlay = this.state.picks.map(pick => pick.odds);
    const newState = {
      ...this.state,
      winningTotal: calcParlay(parlay, this.state.wagerAmount),
      hasBeenCalculated: true
    };
    this.setState(newState);
    this.onSubmit(newState)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FormLabel>Wager Amount</FormLabel>
        <FormInput
          value={this.state.wagerAmount}
          keyboardType="numeric"
          onChangeText={(value) => this.setState({wagerAmount: value})}
        />




        <FormLabel>Picks</FormLabel>

        {this.renderPicks()}
        <Button
          buttonStyle={{marginTop: 20}}
          title="Add Pick"
          onPress={this.addPick}/>

        <Button
          buttonStyle={{marginTop: 20}}
          title='Calculate Winnings'
          backgroundColor="#27ae60"
          disabled={!this.state.wagerAmount}
          onPress={this.calculateWinnings}
        />

        {this.renderTotal()}

      </ScrollView>
    )
  }

}
