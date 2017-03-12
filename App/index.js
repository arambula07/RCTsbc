import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'
import SbcNavigator from './Router'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentBets: [],
    };
    this.addRecentBet = this.addRecentBet.bind(this);
    this.editRecentBet = this.editRecentBet.bind(this);
    this.deleteRecentBet = this.deleteRecentBet.bind(this);
  }
  addRecentBet(newBet, type) {
    newBet.type = type;
    this.setState({
      recentBets: [newBet, ...this.state.recentBets]
    })
  }

  editRecentBet() {
    console.warn('bet edit')
  }

  deleteRecentBet() {
    console.warn('bet deleted')
  }
  render() {
    return (
        <SbcNavigator screenProps={{
          recentBets: this.state.recentBets,
          addRecentBet: this.addRecentBet,
          editRecentBet: this.editRecentBet,
          deleteRecentBet: this.deleteRecentBet,
          }}/>


    )
  }

}
