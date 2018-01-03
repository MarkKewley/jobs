import { MapView } from 'expo';
import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

class MapScreen extends Component {
  state = {
    region: {
      // controls center
      longitude: -122,
      latitude: 37,
      // controls zoom level
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    },
    mapLoaded: false
  };

  componentDidMount () {
    this.setState({mapLoaded: true});
  }

  onRegionChangeComplete = region => {
    this.setState({region});
  };

  render () {
    // for android, component needs to mount before loading MapView
    if (!this.state.mapLoaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size='large'/>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
      </View>
    );
  }

}

export default MapScreen;