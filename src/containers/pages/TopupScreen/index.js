import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { HeaderBackButton } from 'react-navigation-stack'

class TopupScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Topup',
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
    tabBarVisible: false
  })

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Topup Screen</Text>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => this.props.navigation.navigate('CreateTopup')}>
          <Text style={{ color: 'blue' }}>Create</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default TopupScreen
