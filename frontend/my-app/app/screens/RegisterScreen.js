import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/TextInput';



const RegisterScreen = () => {
  const handleRegister = () => {
    
    console.log('Registration process');
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Register</AppText>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        
      />

      <TextInput
      style={styles.input}
      placeholder='Email'

      />

      <TextInput
      style = {styles.input}
      placeholder='password'
      secureTextEntry

      />

      <TextInput
      style = {styles.input}
      placeholder='confirm the password'
      secureTextEntry

      />

      <AppButton onPress={handleRegister} title="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#27ae60', // Custom color for the register button
  },
});

export default RegisterScreen;
