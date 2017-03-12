
import React, {Component} from 'react'
import Calculator from './containers/Calculator'
import RecentBets from './containers/RecentBets'
import Parlay from './containers/Parlay'
import {Icon} from 'react-native-elements'
import { TabNavigator, StackNavigator } from 'react-navigation';


const CalculatorNav = StackNavigator({
  Calculator: {
    screen: Calculator,
    navigationOptions: {
      title: 'Calculator'
    }
  }
});

const ParlayNav = StackNavigator({
  Parlay: {
    screen: Parlay,
    navigationOptions: {
      title: 'Parlay'
    }
  }
});

const RecentBetsNav = StackNavigator({
  RecentBet: {
    screen: RecentBets,
    navigationOptions: {
      title: 'Recent Bets'
    }
  },
  RecentCalculator: {
    screen: Calculator,
    navigationOptions: {
      title: 'Calculator'
    }
  },
  RecentParlay: {
    screen: Parlay,
    navigationOptions: {
      title: 'Parlay'
    }
  }
});

const SbcNavigator = TabNavigator(
  {
    Calculator: {
      screen: CalculatorNav,
      navigationOptions: {
        tabBar: {
          label: 'Calculator',
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
          icon: ({ tintColor }) => (
            <Icon
              name='list-ol'
              type='font-awesome'
              color={tintColor}
            />
          ),
        },
      },
      screen: ParlayNav
    },
    RecentBets: {
      screen: RecentBetsNav,
      navigationOptions: {
        tabBar: {
          label: 'Recent Bets',
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

export default SbcNavigator