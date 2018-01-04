import { MapView } from 'expo';
import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

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

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
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
        <View style={styles.buttonContainer}>
          <Button
            large
            title='Search This Area'
            backgroundColor={'#009688'}
            icon={{name: 'search'}}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }

}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0

  }
};

export default connect(null, actions)(MapScreen);