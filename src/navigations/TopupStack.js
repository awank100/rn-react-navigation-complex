import { createStackNavigator } from 'react-navigation-stack'

import TopupScreen from '../containers/pages/TopupScreen'
import CreateTopupScreen from '../containers/pages/TopupScreen/CreateTopupScreen'

const TopupStack = createStackNavigator({
  Topup: TopupScreen,
  CreateTopup: CreateTopupScreen
})

export default TopupStack
