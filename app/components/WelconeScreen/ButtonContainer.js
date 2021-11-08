import React from "react";
import { StyleSheet, View } from "react-native";

function ButtonContainer({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
  },
});

export default ButtonContainer;
