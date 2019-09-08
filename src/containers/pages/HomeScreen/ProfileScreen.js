import React, { Component } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity } from 'react-native'
import { readToken, clearToken } from '../../../utils'

class ProfileScreen extends Component {
  async componentDidMount() {
    await this.fetchProfile()
  }

  fetchProfile = async () => {
    const token = await readToken()
    if (token === null) {
      const resetAction = StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'App' }),
          NavigationActions.navigate({ routeName: 'Login' })
        ]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

  logout = async () => {
    await clearToken()
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'App' })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={this.logout}>
          <Text style={{ color: 'red', fontSize: 20 }}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => this.props.navigation.navigate('Topup')}>
          <Text style={{ color: 'blue', fontSize: 20 }}>Topup</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ProfileScreen
