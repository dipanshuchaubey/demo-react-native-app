import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorItem from './components/ColorItem';

const CHANGE_INCREMENT = 15;

const reducer = (state, action) => {
  const {red, green, blue} = state;

  switch (action.type) {
    case 'change_red':
      return red + action.payload > 255 || red + action.payload < 0
        ? state
        : {...state, red: red + action.payload};

    case 'change_green':
      return green + action.payload > 255 || green + action.payload < 0
        ? state
        : {...state, green: green + action.payload};

    case 'change_blue':
      return blue + action.payload > 255 || blue + action.payload < 0
        ? state
        : {...state, blue: blue + action.payload};

    default:
      return state;
  }
};

const ColorCounter = () => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  return (
    <View>
      <ColorItem
        color="Red"
        increaseColor={() =>
          dispatch({type: 'change_red', payload: CHANGE_INCREMENT})
        }
        decreaseColor={() =>
          dispatch({type: 'change_red', payload: -1 * CHANGE_INCREMENT})
        }
      />
      <ColorItem
        color="Green"
        increaseColor={() =>
          dispatch({type: 'change_green', payload: CHANGE_INCREMENT})
        }
        decreaseColor={() =>
          dispatch({type: 'change_green', payload: -1 * CHANGE_INCREMENT})
        }
      />
      <ColorItem
        color="Blue"
        increaseColor={() =>
          dispatch({type: 'change_blue', payload: CHANGE_INCREMENT})
        }
        decreaseColor={() =>
          dispatch({type: 'change_blue', payload: -1 * CHANGE_INCREMENT})
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

// const style = StyleSheet.create({});

export default ColorCounter;
