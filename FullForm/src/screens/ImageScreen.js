import React from 'react';
import {View} from 'react-native';
import SingleImage from './components/SingleImage';

const ImageScreen = () => {
  return (
    <View>
      <SingleImage
        // @ts-ignore
        imageSource={require('../img/beach.jpg')}
        title="Beach"
      />
      <SingleImage
        // @ts-ignore
        imageSource={require('../img/forest.jpg')}
        title="Forest"
      />
      <SingleImage
        // @ts-ignore
        imageSource={require('../img/mountain.jpg')}
        title="Mountain"
      />
    </View>
  );
};

export default ImageScreen;
