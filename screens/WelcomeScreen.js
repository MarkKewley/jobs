import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {text: 'Welcome to Job App', color: '#03A9F4'},
  {text: 'Use this to get a job', color: '#009688'},
  {text: 'Set your location, then swipe away', color: '#03A9F4'}
];

class WelcomeScreen extends Component {
  state = {
    token: null
  };

  async componentWillMount() {
    let token = AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('auth');
      this.setState({token});
    } else {
      this.setState({token: false});
    }
  }

  onSlidesComplete = () => {
    // this is passed from the ReactNavigation
    this.props.navigation.navigate('auth');
  };

  render () {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    );
  }

}

export default WelcomeScreen;