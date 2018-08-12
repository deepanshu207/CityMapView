import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';
import CustomSearch from './CustomSearch';

export default App =()=> {
    return (
    <View style={styles.container}>    
        <CustomSearch/>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});