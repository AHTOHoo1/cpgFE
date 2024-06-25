import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import ThemedText from '../../common/ThemedText';

export default function MainScreen({ navigation }) {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
      <ThemedText>this is a main screen</ThemedText>
      <Button onPress={() => navigation.navigate('Splash')} title="go to splash" />
      <Button onPress={() => navigation.navigate('Error')} title="go to error" />
    </View>
  );
}

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
