import React, {Component} from 'react'
import {
  View,
  Text,
} from 'react-native'

import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'

export default class Parlay extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Parlay',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      icon: ({ tintColor }) => (
        <Icon
          name='list-ol'
          type='font-awesome'
          color={tintColor}
        />
      ),
    },
  }
  render() {
    return (
      <View>

        <Text>Hello parlay</Text>
      </View>
    )
  }

}