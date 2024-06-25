import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, StyleSheet } from 'react-native';
import SplashScreen from './src/SplashScreen/SplashScreen';
import MainScreen from './src/MainScreen/MainScreen';
import ErrorScreen from './src/ErrorScreen/ErrorScreen';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';

const Stack = createStackNavigator();

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  return (
    <View style={styles.buttonContainer}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Error" component={ErrorScreen} />
        </Stack.Navigator>
        <ThemeToggleButton />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: 40,
    right: 10,
    zIndex: 1,
  },
});