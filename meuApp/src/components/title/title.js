import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Title() {
  return (
    <View>
      <Text style={styles.title}>SAÚDE+</Text>
    </View>
  );
}

const styles = {
  title: { 
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0c6b00ff',
  }
};