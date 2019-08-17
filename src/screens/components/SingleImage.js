import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const SingleImage = ({imageSource, title}) => {
  return (
    <View>
      <Image style={style.image} source={imageSource} />
      <Text style={style.text}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
    marginTop: -80,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  image: {
    marginBottom: 50,
  },
});

export default SingleImage;
