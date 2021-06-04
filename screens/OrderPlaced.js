import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OrderPlaced() {
  return (
    <View style={styles.container}>
      <Text style={styles.orderText1}>Dear Customer</Text>
      <Text style={styles.orderText2}>Your order successfully placed.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  orderText1: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
  },
  orderText2: {
    fontSize: 25,
    padding: 10,
    textAlign: "center",
  },
});
