import React, { Component } from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      const {buttonContainer, buttonStyle} = styles;
      return (
        <View style={buttonContainer}>
          <Button
            title='Onwards!'
            onPress={this.props.onComplete}
            buttonStyle={buttonStyle}
            raised
          />
        </View>
      )
    }
  }

  renderSlides () {
    const {textStyle, slideStyle} = styles;
    return this.props.data.map((slide, index) => (
      <View
        style={[slideStyle, {backgroundColor: slide.color}]}
        key={slide.text}
      >
        <Text style={textStyle}>{slide.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    ));
  }

  // horizontal scrolls in the horizontal direction
  // pagingEnabled will automatically advanced to next slide
  // which makes it look like you are stopping at one thing at a time
  render () {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{flex: 1}}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }

}

// NOTE: flex: 1 only expands the vertical direction, width is needed
// to expand across the whole screen.
const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white'
  },
  buttonContainer: {
    marginTop: 15
  },
  buttonStyle: {
    backgroundColor: '#0288D1'
  }
};

export default Slides;