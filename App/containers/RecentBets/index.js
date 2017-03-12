import React, {Component} from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import { List, ListItem } from 'react-native-elements'

export default class RecentBets extends Component {

  onItemClick(bet){
    this.props.navigation.navigate('RecentCalculator', bet)
  }

  renderRecentBets() {
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          this.props.screenProps.recentBets.map((bet, i) => (
            <ListItem
              key={i}
              title={`total winnings ${bet.winningTotal}`}
              onPress={() => this.onItemClick(bet)}
            />
          ))
        }
      </List>
    )
  }
  render() {
    return (
      <View>
        {this.renderRecentBets()}
      </View>
    )
  }

}