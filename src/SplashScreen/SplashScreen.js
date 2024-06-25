import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; 
import ThemedText from '../../common/ThemedText';

const SplashScreen = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <ThemedText>Splash Screen</ThemedText>
      <Button onPress={() => navigation.navigate('Main')} title="Go to Main Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#000000',
  },
});

export default SplashScreen;
