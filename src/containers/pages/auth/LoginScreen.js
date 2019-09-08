import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { saveToken } from '../../../utils'

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  completeLogin = async () => {
    await saveToken('blabla')
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            this.props.navigation.navigate('Register')
          }}>
          <Text style={{ color: 'blue', fontSize: 20 }}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={this.completeLogin}>
          <Text style={{ color: 'green', fontSize: 20 }}>Complete Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LoginScreen
