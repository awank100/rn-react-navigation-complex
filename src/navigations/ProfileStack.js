import { createStackNavigator } from 'react-navigation-stack'

import ProfileScreen from '../containers/pages/HomeScreen/ProfileScreen'
import TopupStack from './TopupStack'

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Topup: TopupStack
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}

export default ProfileStack
