// @flow
import React from 'react'
import { StyleSheet, View, Dimensions, Text, Clipboard } from 'react-native'

import LinkedInModal from 'react-native-linkedin'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class AppContainer extends React.Component {
  state = {
    access_token: undefined,
    expires_in: undefined,
  }
  render() {
    const { expires_in, access_token } = this.state
    return (
      <View style={styles.container}>
        <LinkedInModal
          clientID="86vrfyx76mucrq"
          clientSecret="as8w6lkXydkY94Is"
          redirectUri="https://xaviercarpentier.com"
          onSuccess={this.setState.bind(this)}
        />
        {access_token && (
          <Text onPress={() => Clipboard.setString(access_token)}>
            {'\n'}access_token: {access_token} {'\n'}
          </Text>
        )}
        {expires_in && (
          <Text onPress={() => Clipboard.setString(`${expires_in}`)}>
            expires_in: {expires_in}
            {'\n'}
          </Text>
        )}
      </View>
    )
  }
}
