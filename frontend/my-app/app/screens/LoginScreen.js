import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/TextInput'



const LoginScreen = () => {
  const handleLogin = () => {
    console.log("login")
  }
  
  return (
<AppScreen style = {styles.container}>
<AppText>Login To The App</AppText>

<AppTextInput
style = {styles.input}
placeholder='Username'

/>

<AppTextInput
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
  },
  container:{
    justifyContent: "center",
    alignItems: "center",
  }
})