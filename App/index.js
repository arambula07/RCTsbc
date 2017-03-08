import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Calculator from './containers/Calculator'
import RecentBets from './containers/RecentBets'
import Parlay from './containers/Parlay'

import { TabNavigator } from 'react-navigation';


const SimpleApp = TabNavigator(
  {
    Calculator: { screen: Calculator },
    Parlay: { screen: Parlay },
    RecentBets: { screen: RecentBets },
  },
  {
    tabBarOptions: {activeTintColor: '#27ae60'}
  });
export default SimpleApp


