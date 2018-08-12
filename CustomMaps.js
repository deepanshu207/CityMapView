import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default CustomMaps=(props)=> {
    return (
    <View style={styles.container}>    
        <MapView
            style={styles.map}
            initialRegion={{
              latitude: 28.4020,
              longitude: 76.8260,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
           region={{
            latitude: Number(props.latitude) || 28.4020,
            longitude: Number(props.longitude) || 76.8260,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
             <MapView.Marker
              coordinate={{
                latitude: Number(props.latitude) ,
                longitude: Number(props.longitude),
              }}/>
        </MapView>       
      </View>
    );
  }


const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});