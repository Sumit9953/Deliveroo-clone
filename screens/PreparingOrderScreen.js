import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React, { useEffect } from "react";

import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
       setTimeout(() => {
        navigation.navigate("Delivery")
       },4000) 
    })

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        source={require("../assets/orderLoding.gif")}
        animation="slideInUp"
        iterationCount={1}
        style={tw`h-96 w-96`}
      />

      <Animatable.Text animation="slideInUp" iterationCount={1} style={tw`text-lg text-white font-bold text-center`}>Waiting for Restaurant to accept your order!</Animatable.Text>

      {/* <Progress.Circle size={60} indeterminate={true} color="white" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    paddingTop: 5,
    backgroundColor: "#00CCBB",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PreparingOrderScreen;
