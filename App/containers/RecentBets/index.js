import React, {Component} from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import { List, ListItem, Icon } from 'react-native-elements'

export default class RecentBets extends Component {

  renderRecentBets() {
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          this.props.screenProps.recentBets.map((bets, i) => (
            <ListItem
              key={i}
              title={`total winnings ${bets.winningTotal}`}
            />
          ))
        }
      </List>
    )
  }
  render() {
    return (
      <View>
        <Text>Hello Recent bets</Text>
        <Text>Hello Recent bets</Text>
        <Text>Hello Recent bets</Text>
        {this.renderRecentBets()}
      </View>
    )
  }

}