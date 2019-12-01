import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={style.parent}>
      <Text style={style.child1}>Child #1</Text>
      <Text style={style.child2}>Child #2</Text>
      <Text style={style.child3}>Child #3</Text>
    </View>
  );
};

const style = StyleSheet.create({
  parent: {
    borderWidth: 1,
    borderColor: 'black',
    height: 200,
    backgroundColor: '#f8f8f8',
  },
  child1: {
    borderWidth: 3,
    borderColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },

  child2: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  child3: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default BoxScreen;
