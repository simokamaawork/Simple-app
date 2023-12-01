import React from 'react';
import { View, SafeAreaView, StyleSheet, Platform } from 'react-native';

const AppScreen = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust as needed
  },
  container: {
    flex: 1,
  },
});

export default AppScreen;
