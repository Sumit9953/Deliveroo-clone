import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/AntDesign";
import Categories from "../components/Categorie.js";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={tw`flex-row pb-3 items-center mx-4`}>
        <Image
          style={tw`w-7 h-7 bg-gray-300 p-4 rounded-full`}
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <View style={tw`ml-2 flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl`}>
            Current Location
            <Icon name="down" size={20} color="#00CCBB" />
          </Text>
        </View>
        <Icon name="user" size={35} color="#00CCBB" />
      </View>

      {/* Searchbar */}
      <View style={tw`flex-row items-center pb-2 mx-4`}>
        <View style={tw`flex-row items-center flex-1 bg-gray-200 p-2  `}>
          <Icon name="search1" size={20} color="gray" />
          <TextInput
            style={tw`ml-1`}
            placeholder="Resturant and cuisines"
            keyboardType="default"
          />
        </View>

        <Icon style={tw`ml-1`} name="filter" size={25} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    paddingTop: 5,
  },
});

export default HomeScreen;
