import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function Button({ color, onPress, text }) {
  return (
    <Pressable style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 50,
    flex: 1,
    justifyContent: "center",
    margin: 10,
    padding: 10,
  },
  text: {
    color: colors.white,
    fontWeight: "600",
  }
});

export default Button;
