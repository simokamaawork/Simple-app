import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppScreen from '../components/AppScreen'

const WelcomeScreen = () => {
  return (
    <View>
      <AppScreen>
      <Text>Welcome to the home page</Text>
      </AppScreen>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})