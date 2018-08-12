import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  GooglePlacesAutocomplete
} from 'react-native-google-places-autocomplete';
const screenWidth = Dimensions.get('window').width;
import CustomMaps from './CustomMaps';
export default class CustomSearch extends Component {
  constructor() {
    super();
    this.state = {
      address:'',
      latitude:'',
      longitude:'',
      coordinates:'',
    };
  }

  render() {
    return (       
        <View style={StyleSheet.absoluteFillObject} >
        <CustomMaps
        latitude={this.state.latitude}
        longitude={this.state.longitude}
        />
        <GooglePlacesAutocomplete
            ref={c => this.googlePlacesAutocomplete = c}
            placeholder="Search"
            minLength={1} 
            autoFocus={false}
            returnKeyType={'search'}        
            fetchDetails={true}
            getDefaultValue={() => {
              return ''; 
            }}
            renderRightButton={() => (
              <TouchableOpacity
              style={{ marginRight:'5%',justifyContent:'center' }}
                onPress={() => {
                  this.googlePlacesAutocomplete._handleChangeText('')
                }}>
              <Image 
              source={require('./assets/cross.png')}
              style={{ tintColor:'gray',width: 25, height: 25 }} />
              </TouchableOpacity>
            )}
            enablePoweredByContainer={false}
            query={{
              key: 'AIzaSyC2QhtACfVZ2cr9HVvxQuzxd3HT36NNK3Q',
              language: 'en', 
              types: '(cities)', 
              location: '28.4020, 76.8260',
              radius: '120000', //120 km
              components:'country:in',
              strictbounds: true,
            }}
            styles={{
              container:{
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 10,
              },
                description: {
                    fontWeight: 'bold',
                },
                textInputContainer: {
                    backgroundColor: '#ffffff',
                    width: screenWidth,
                    borderTopWidth: 0,
                    borderBottomWidth:0,
                },
                textInput: {
                    height: 30,
                    color: '#5d5d5d',
                    fontSize: 16,
                    justifyContent:'center'
                },
                listView: {
                    backgroundColor: '#ffffff',
                    top: 5
                }
            }}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3'
            ]} 
        debounce={0}
        onPress={(data, details = null) => { 
        console.log(data, details);
        this.setState(
                  {
                    address: data.description, 
                    coordinates: `${details.geometry.location.lat},${details.geometry.location.lng}`,
                    latitude:`${details.geometry.location.lat}`,
                    longitude:`${details.geometry.location.lng}`
                  }
                );
      }}
        />            
    </View>
    );
  }
}

