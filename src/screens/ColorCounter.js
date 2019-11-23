import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorItem from './components/ColorItem';

const CHANGE_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return {...state, red: state.red + action.amount};
    case 'green':
      return {...state, green: state.green + action.amount};
    case 'blue':
      return {...state, blue: state.blue + action.amount};

    default:
      return state;
  }
};

const ColorCounter = () => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  console.log(state);

  return (
    <View>
      <ColorItem
        color="Red"
        increaseColor={() =>
          dispatch({colorToChange: 'red', amount: CHANGE_INCREMENT})
        }
        decreaseColor={() =>
          dispatch({colorToChange: 'red', amount: -1 * CHANGE_INCREMENT})
        }
      />
      <ColorItem
        color="Green"
        increaseColor={() =>
          dispatch({colorToChange: 'green', amount: CHANGE_INCREMENT})
        }
        decreaseColor={() =>
          dispatch({colorToChange: 'green', amount: -1 * CHANGE_INCREMENT})
        }
      />
      <ColorItem
        color="Blue"
        increaseColor={() =>
          dispatch({colorToChange: 'blue', amount: CHANGE_INCREMENT})
        }
        decreaseColor={() =>
          dispatch({colorToChange: 'blue', amount: -1 * CHANGE_INCREMENT})
        }
      />

      <View
        style={{
          height: 200,
          width: 200,
          marginTop: 50,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColorCounter;
