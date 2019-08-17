import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorItem from './components/ColorItem';

const CHANGE_INCREMENT = 15;

const ColorCounter = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        if (red + change > 255 || red + change < 0) {
          return;
        }
        return setRed(red + change);

      case 'green':
        if (green + change > 255 || green + change < 0) {
          return;
        }
        return setGreen(green + change);

      case 'blue':
        if (blue + change > 255 || blue + change < 0) {
          return;
        }
        return setBlue(blue + change);

      default:
        return;
    }
  };

  return (
    <View>
      <ColorItem
        color="Red"
        increaseColor={() => setColor('red', CHANGE_INCREMENT)}
        decreaseColor={() => setColor('red', -1 * CHANGE_INCREMENT)}
      />
      <ColorItem
        color="Green"
        increaseColor={() => setColor('green', CHANGE_INCREMENT)}
        decreaseColor={() => setColor('green', -1 * CHANGE_INCREMENT)}
      />
      <ColorItem
        color="Blue"
        increaseColor={() => setColor('blue', CHANGE_INCREMENT)}
        decreaseColor={() => setColor('blue', -1 * CHANGE_INCREMENT)}
      />

      <View
        style={{
          height: 200,
          width: 200,
          marginTop: 50,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColorCounter;
