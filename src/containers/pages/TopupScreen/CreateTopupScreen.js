import React, { Component } from 'react'
import { View, Text } from 'react-native'

class CreateTopupScreen extends Component {
  static navigationOptions = {
    title: 'Create Topup'
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Create Topup Screen</Text>
      </View>
    )
  }
}

export default CreateTopupScreen
