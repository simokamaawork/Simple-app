import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import HomePageScreen from './app/screens/HomePageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';



export default function App() {
  return (
    <View style={styles.container}>
  
    <Card
    
    />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
