import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import HomePageScreen from './app/screens/HomePageScreen';
import AppButton from './app/components/AppButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer , useNavigationContainerRef } from '@react-navigation/native';
import AppText from './app/components/AppText';



const Tab = createBottomTabNavigator();
// const navigationRef = useNavigationContainerRef(); 



export default function App() {
  return (
<>
<LoginScreen/>
<View style={styles.container}>
  
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name="Home" component />
<Tab.Screen name="register" component />
</Tab.Navigator>
</NavigationContainer>
    
// <View style="{styles.home}">
 <AppText>Welcome</AppText>
<Button title="welcome" ></Button>
 </View>
      <StatusBar style="auto" />
    </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  home:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center'
  }
});
