import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
// Utils
import { readToken } from '../storage'
// Actions

const IsAuthenticated = (Comp, option = {}) => {
  const defaultOptions = {
    redirect: true
  }
  const options = {
    ...defaultOptions,
    ...option
  }

  class IsAuthenticatedHOC extends Component {
    constructor(props) {
      super(props)

      this.token = null
      this.redirectIfTokenNull()
      // this.fetchProfile()
    }

    redirectIfTokenNull = async () => {
      const token = await readToken()
      this.token = token
      if (this.token === null && options.redirect) {
        // await clearStorage()
        // const resetAction = StackActions.reset({
        //   index: 1,
        //   actions: [
        //     NavigationActions.navigate({routeName: 'Tab'}),
        //     NavigationActions.navigate({routeName: 'Login'})
        //   ]
        // })
        // this.props.navigation.dispatch(resetAction)
        this.props.navigation.replace('Login')
      }
    }

    render() {
      return <Comp {...this.props} />
    }
  }

  return withNavigation(IsAuthenticatedHOC)
}

export default IsAuthenticated
