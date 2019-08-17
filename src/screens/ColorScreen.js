import React, {useState} from 'react';
import {View, Button, FlatList} from 'react-native';

const ColorScreen = () => {
  const [color, setColor] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue});`;
  };

  return (
    <View>
      <Button
        title="Generate new color"
        onPress={() => setColor([...color, randomColor()])}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => {
          return item;
        }}
        data={color}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;
