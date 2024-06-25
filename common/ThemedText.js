import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '../src/contexts/ThemeContext'; 

const ThemedText = ({ style, ...props }) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[
        styles.text,
        theme === 'dark' ? styles.darkText : styles.lightText,
        style
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
});

export default ThemedText;
