import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";

import Icon from "react-native-vector-icons/Entypo";
import IconA from "react-native-vector-icons/AntDesign";
import DishRow from "../components/DishRow";
import BaskteIcon from "../components/BaskteIcon";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  return (
    <>
    <BaskteIcon />
    <ScrollView>
      <View style={tw`relative`}>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          style={tw`w-full h-56 bg-gray-300 p-4`}
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}
        >
          <IconA name="arrowleft" size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View style={tw`bg-white`}>
        <View style={tw`px-4 pt-4`}>
          <Text style={tw`text-3xl font-bold`}>{title}</Text>
          <View style={tw`flex-row my-1`}>
            <View style={tw`flex-row items-center`}>
              <Icon name="star" size={22} color="green" opacity={0.5} />
              <Text style={tw`ml-1 text-sm text-gray-500`}>
                <Text style={tw`text-green-500`}>{rating}</Text>. {genre}
              </Text>
            </View>

            <View style={tw`ml-2 flex-row items-center`}>
              <Icon name="location-pin" size={22} color="gray" opacity={0.4} />
              <Text style={tw`ml-1 text-sm text-gray-500`}>
                Nearby. {address}
              </Text>
            </View>
          </View>

          <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
        </View>

        <TouchableOpacity
          style={tw`flex-row items-center p-4 border border-gray-300 `}
        >
          <IconA name="questioncircleo" size={20} opacity={0.6} color="gray" />
          <Text style={tw`ml-2 pl-2 flex-1 text-md font-bold`}>
            Have a food allergy?
          </Text>
          <IconA name="right" size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View style={tw`pb-36`}>
        <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>

        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
    </>
  );
};

export default RestaurantScreen;
