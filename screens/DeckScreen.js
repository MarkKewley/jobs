import { MapView } from 'expo';
import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import striptags from 'striptags';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {

  // can use cachedEnabled={true} for MapView if we want static maps
  renderJob = job => {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      longitudeDelta: 0.045,
      latitudeDelta: 0.02
    };
    return (
      <Card title={job.jobtitle}>
        <View style={{height: 300}}>
          <MapView
            style={{flex: 1}}
            scrollEnabled={false}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          >
          </MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{striptags(job.snippet)}</Text>
      </Card>
    );
  };

  renderNoMoreJobs = () => {
    return (
      <Card title={'No more jobs'}>
        <Button
          large
          title='Find More?'
          backgroundColor={'#009688'}
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    );
  };

  render () {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderJob}
          renderNoMoreCards={this.renderNoMoreJobs}
          getKeyFromCardItem={job => job.jobkey}
        />
      </View>
    );
  }

}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

const mapStateToProps = ({jobs}) => {
  return {jobs: jobs.results};
};

export default connect(mapStateToProps, null)(DeckScreen);