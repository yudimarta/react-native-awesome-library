import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AwesomeLibraryView } from 'react-native-awesome-library';

export default function App() {
  return (
    <View style={styles.container}>
      <AwesomeLibraryView color="#32a852" style={styles.box} />
      <Text>Halo Mas Fakhry Fauzan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
