import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../components/TextInput'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'

const HomePageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomePageScreen</Text>
      <Image
      style={styles.pictures}
      source={require('../assets/images/group.jpg')}
    />
<AppText>Group</AppText>
    <Image
    style={styles.pictures}
    source={require('../assets/images/group.jpg')}
  />
<AppText>Group</AppText>
  <Image
  style={styles.pictures}
  source={require('../assets/images/group.jpg')}
/>
      <AppButton/>
    </View>
  )
}

export default HomePageScreen

const styles = StyleSheet.create({
container:{
  display: 'flex',
  position: 'absolute',
},

pictures : {
  width:150,
  height:150,
}
})