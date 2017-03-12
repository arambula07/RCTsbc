
import React, {Component} from 'react'
import CalculatorTab from './containers/CalculatorTab'
import Calculator from './components/Calculator'
import RecentBets from './containers/RecentBets'
import Parlay from './components/Parlay'
import ParlayTab from './containers/ParlayTab'
import {Icon} from 'react-native-elements'
import { TabNavigator, StackNavigator } from 'react-navigation';
import {colors} from './theme'

const baseHeader = {tintColor: colors.headerText, style: {backgroundColor: colors.defaultPrimary}};
const CalculatorNav = StackNavigator({
  Calculator: {
    screen: CalculatorTab,
    navigationOptions: {
      title: 'Calculator',
      header: baseHeader
    }
  }
});

const ParlayNav = StackNavigator({
  Parlay: {
    screen: ParlayTab,
    navigationOptions: {
      title: 'Parlay',
      header: baseHeader
    }
  }
});

const RecentBetsNav = StackNavigator({
  RecentBet: {
    screen: RecentBets,
    navigationOptions: {
      title: 'Recent Bets',
      header: baseHeader
    }
  },
  RecentCalculator: {
    screen: Calculator,
    navigationOptions: {
      title: 'Calculator',
      header: baseHeader
    }
  },
  RecentParlay: {
    screen: Parlay,
    navigationOptions: {
      title: 'Parlay',
      header: baseHeader
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