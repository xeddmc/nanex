'use strict';

import React, {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  }
});

export default (props) => {
  return (
    <View style={styles.container}>
      <Text>signup page</Text>
      <TouchableOpacity onPress={() => props.scene().goto('/home')}>
        <Text style={styles.welcome}>go home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.scene().goback()}>
        <Text style={styles.welcome}>go back</Text>
      </TouchableOpacity>
    </View>
  );
}
