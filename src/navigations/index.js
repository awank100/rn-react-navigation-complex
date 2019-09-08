import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import TabNavigator from './TabNavigator'

import LoginScreen from '../containers/pages/auth/LoginScreen'
import RegisterScreen from '../containers/pages/auth/RegisterScreen'

const MainNavigator = createStackNavigator(
  {
    App: TabNavigator,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {}
)

const AppNavigator = createSwitchNavigator(
  {
    Main: MainNavigator
  },
  {}
)
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
