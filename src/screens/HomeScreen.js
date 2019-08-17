import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const HomeScreen = props => {
  return (
    <>
      <Text style={style.textStyle}>Getting started with react native.</Text>

      <Button
        title="View List"
        onPress={() => props.navigation.navigate('List')}
      />
      <Button
        title="Image Screen"
        onPress={() => props.navigation.navigate('Image')}
      />
      <Button
        title="Counter"
        onPress={() => props.navigation.navigate('Counter')}
      />
      <Button
        title="Color Screen"
        onPress={() => props.navigation.navigate('Color')}
      />
      <Button
        title="Color Counter"
        onPress={() => props.navigation.navigate('ColorCounter')}
      />
    </>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    textAlign: 'center',
  },
});

export default HomeScreen;
