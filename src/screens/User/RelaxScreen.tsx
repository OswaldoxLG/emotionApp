import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RelaxScreenProps {}

export const RelaxScreen = (props: RelaxScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>RelaxScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
