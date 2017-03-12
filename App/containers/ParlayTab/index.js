import React, {Component} from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import Parlay from '../../components/Parlay'

export default class ParlayTab extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(newState) {
    this.props.screenProps.addRecentBet(newState, 'parlay')
  }

  render() {
    return (
      <Parlay bet={{}} onSubmit={this.onSubmit}/>
    )
  }

}
