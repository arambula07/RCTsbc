import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Calculator from './containers/Calculator'
import RecentBets from './containers/RecentBets'
import Parlay from './containers/Parlay'
import {Icon} from 'react-native-elements'
import { TabNavigator } from 'react-navigation';


const SbcNavigator = TabNavigator(
  {
    Calculator: {
      screen: Calculator,
      navigationOptions: {
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
      },

    },
    Parlay: {
      navigationOptions: {
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
      },
      screen: Parlay
    },
    RecentBets: {
      screen: RecentBets,
      navigationOptions: {
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
    },
  },
  {
    tabBarOptions: {activeTintColor: '#27ae60'}
  });

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
    console.warn(newBet.winningTotal)
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
