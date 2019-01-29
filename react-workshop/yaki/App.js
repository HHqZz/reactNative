import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Messagelist from './components/MessageList';
import MessageList from './components/MessageList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <MessageList />
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39ff14',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
