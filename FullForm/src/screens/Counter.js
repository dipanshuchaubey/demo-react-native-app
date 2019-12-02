import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text style={style.counter}>Counter: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  counter: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 90,
  },
});

export default Counter;
