import { View, Text, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
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
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="111 Main st"
          short_description="This is a Test Desceiptio"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="111 Main st"
          short_description="This is a Test Desceiptio"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="111 Main st"
          short_description="This is a Test Desceiptio"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="111 Main st"
          short_description="This is a Test Desceiptio"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
