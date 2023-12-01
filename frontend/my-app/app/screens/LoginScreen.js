import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'


const LoginScreen = () => {
  const handleLogin = () => {
    console.log("login")
  }
  
  return (
<AppScreen>
<AppText>Login To The App</AppText>

<TextInput
style = {styles.input}
placeholder='Username'

/>

<TextInput
style={styles.input}
placeholder='Password'
secureTextEntry

/>

<AppButton onPress={handleLogin} title="Login" style = {styles.button} />
</AppScreen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
  },
  button: {
    height: 10,
  }
})