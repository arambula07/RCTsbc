import {
  StyleSheet
} from 'react-native'
import {colors} from '../../theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  winningsText: {
    fontSize: 40,
    marginLeft: 20,
    marginTop: 5,
    color: colors.accentColor
  }
});