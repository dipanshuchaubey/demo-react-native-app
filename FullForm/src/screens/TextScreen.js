import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text style={style.text}>Text Screen</Text>
      <TextInput
        style={style.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={newText => setText(newText)}
      />

      {text.length <= 5 ? (
        <Text style={style.alert}>
          Length of text should be more than 5 chars
        </Text>
      ) : null}

      <Text style={style.text}>
        Your username is : <Text style={style.span}>{text}</Text>
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  span: {
    color: 'orange',
  },
  alert: {
    marginLeft: 15,
    marginTop: -10,
    color: 'red',
  },
});

export default TextScreen;
