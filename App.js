import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import DeckScreen from './screens/DeckScreen';
import MapScreen from './screens/MapScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends Component {

  render () {
    const MainNavigator = TabNavigator({
      welcome: {screen: WelcomeScreen},
      auth: {screen: AuthScreen},
      main: { // main flow of the application
        screen: TabNavigator({
          map: {screen: MapScreen},
          deck: {screen: DeckScreen},
          review: {
            screen: StackNavigator({
              review: {screen: ReviewScreen},
              settings: {screen: SettingsScreen}
            })
          }
        })
      }
    });

    return (
      <View style={styles.container}>
        <MainNavigator/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
