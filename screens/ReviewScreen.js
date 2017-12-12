import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  // whenever a navigator is about to show this component
  // it will use the configuration in here to define this route
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title='Settings'
        onPress={() => navigation.navigate('settings')}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0, 122, 255, 1)'
      />
    ),
    // note this is solved in App.js with the tabBarPosition property keeping here to show Platform specific code though
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });


  render () {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }

}

export default ReviewScreen;