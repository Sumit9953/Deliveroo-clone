import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

import Icon from "react-native-vector-icons/Entypo";

import tw from "twrnc";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View style={tw`bg-[#00CCBB] flex-1`}>
      <SafeAreaView style={styles.container}>
        <View style={tw`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="cross" color="white" size={30} />
          </TouchableOpacity>
          <Text style={tw`font-light text-white text-lg `}>Order Help</Text>
        </View>

        <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md`}>
          <View style={tw`flex-row justify-between`}>
            <View>
              <Text style={tw`text-lg text-gray-400`}>Estimated Arrival</Text>
              <Text style={tw`text-4xl font-bold`}>45-55 Minutes</Text>
            </View>
            <Image
              style={tw`h-20 w-20`}
              source={{
                uri: "https://links.papareact.com/fls",
              }}
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text style={tw`mt-3 text-gray-500`}>
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
        <MapView
          style={tw`flex-1 -mt-10 z-0`}
          mapType="mutedStandard"
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="#00CCBB"
          />
        </MapView>
        <SafeAreaView style={tw`bg-white flex-row items-center h-28`}>
          <Image
            style={tw`h-12 w-12 bg-gray-300 p-4 rounded-full ml-5`}
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
          <View style={tw`flex-1`}>
            <Text style={tw`text-lg ml-5`}>Sumit</Text>
            <Text style={tw`text-gray-400 ml-5`}>Your Rider</Text>
          </View>

          <Text style={tw`text-[#00CCBB] font-bold text-lg mr-5`}>Call</Text>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    zIndex: 50,
  },
});

export default DeliveryScreen;
