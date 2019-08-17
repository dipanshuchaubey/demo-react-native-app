import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ColorItem = ({color, increaseColor, decreaseColor}) => {
  return (
    <View>
      <Text style={style.heading}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => increaseColor()} />
      <Button title={`Decrease ${color}`} onPress={() => decreaseColor()} />
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ColorItem;
