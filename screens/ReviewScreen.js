import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  // whenever a navigator is about to show this component
  // it will use the configuration in here to define this route
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button title='Settings' onPress={() => navigation.navigate('settings')} />
    )
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