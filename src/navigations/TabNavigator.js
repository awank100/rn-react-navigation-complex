import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../containers/pages/HomeScreen'
import ProfileScreen from '../containers/pages/HomeScreen/ProfileScreen'
import ProfileStack from './ProfileStack'

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileStack
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

export default TabNavigator
