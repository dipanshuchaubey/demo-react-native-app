import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const FlatListComp = () => {
  const friends = [
    {name: 'Friend 1', age: '20'},
    {name: 'Friend 2', age: '30'},
    {name: 'Friend 3', age: '20'},
    {name: 'Friend 4', age: '21'},
    {name: 'Friend 5', age: '23'},
    {name: 'Friend 6', age: '25'},
    {name: 'Friend 7', age: '26'},
    {name: 'Friend 8', age: '18'},
  ];

  return (
    <>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item}) => (
          <Text>
            {item.name} - Age {item.age}
          </Text>
        )}
      />
    </>
  );
};

const style = StyleSheet.create({});

export default FlatListComp;
