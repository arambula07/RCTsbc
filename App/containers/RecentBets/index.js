import React, {Component} from 'react'
import {
  View,
  Text,
} from 'react-native'

import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'

export default class RecentBets extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Recent Bets',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Icon
          name='history'
          type='font-awesome'
          color={tintColor}
        />
      ),
    },
  }
  render() {
    return (
      <View>

        <Text>Hello Recent bets</Text>
      </View>
    )
  }

}