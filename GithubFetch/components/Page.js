import React, { Component } from "react";
import { Image, ScrollView, Text } from "react-native";

class HelloReactNative extends Component {
  render() {
    return (
      <ScrollView>
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/header_logo.png"
          }}
          style={{ width: 66, height: 58 }}
        />
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView. On
          Android, it uses a native ScrollView. On iOS, a React Native Image
          uses a native UIImageView. On Android, it uses a native ImageView.
          React Native wraps the fundamental native components, giving you the
          performance of a native app using the APIs of React.
        </Text>
      </ScrollView>
    );
  }
}

export default HelloReactNative;
