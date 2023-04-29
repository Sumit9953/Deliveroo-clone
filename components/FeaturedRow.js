import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient
    .fetch(
      `
  *[_type == "featured" && _id == $id] {
    ...,
    restaurants[]->{
      ...,
      dishes[] ->,
      type-> {
        name
      }
        },
      }[0]
  `,
      { id }
    )
    .then((data) => {
      setRestaurants(data.restaurants);
    });
  },[id])

  // console.log(restaurants);

  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <Icon name="arrowright" size={20} color="#00CCBB" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView
        style={tw`pt-4`}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >

        {restaurants?.map((restaurant) => (
          <RestaurantCard
          key={restaurant._id}
          id={restaurant._id}
          imgUrl={restaurant.image}
          title={restaurant.name}
          rating={restaurant.rating}
          genre={restaurant.type?.name}
          address={restaurant.address}
          short_description={restaurant.short_description}
          dishes={restaurant.dishes}
          long={restaurant.long}
          lat={restaurant.lat}
        />
        ))}
        
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
