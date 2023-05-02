import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeToBasket,
  selectBasketItem,
  selectBasketTotal,
} from "../features/basketSlice";
import tw from "twrnc";
import Currency from "react-currency-formatter";

import Icon from "react-native-vector-icons/Entypo";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItem);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-md`}>
          <View>
            <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
            <Text style={tw`text-center text-gray-400`}>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            style={tw`rounded-full bg-[#00CCBB] absolute top-5 right-5`}
          >
            <Icon name="cross" color="#fff" size={40} />
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row items-center px-4 py-3 bg-white my-5`}>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          />
          <Text style={tw`flex-1 ml-4`}>Deliver in 50-70 min</Text>
          <TouchableOpacity>
            <Text style={tw`text-[#00CCBB]`}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={tw`border-t border-gray-200`}>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              style={tw`flex-row py-2 px-5 bg-white  items-center`}
              key={key}
            >
              <Text style={tw`text-[#00CCBB]`}>{items.length} x</Text>
              <Image
                style={tw`h-12 w-12 ml-3 rounded-full`}
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
              />
              <Text style={tw`flex-1 ml-3`}>{items[0]?.name}</Text>

              <Text style={tw`text-gray-600`}>
                <Currency quantity={items[0]?.price} currency="INR" />
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeToBasket({ id: key }))}
              >
                <Text style={tw`text-[#00CCBB] ml-3 text-xs`}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={tw`p-5 bg-white mt-5 `}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-400`}>Subtotal</Text>
            <Text style={tw`text-gray-400`}>
              <Currency quantity={basketTotal} currency="INR" />
            </Text>
          </View>

        <View style={tw`flex-row mt-4 justify-between`}>
          <Text style={tw`text-gray-400`}>Delivery Fee</Text>
          <Text style={tw`text-gray-400`}>
            <Currency quantity={5.99} currency="INR" />
          </Text>
        </View>

        <View style={tw`flex-row mt-4 justify-between`}>
          <Text >Order Total</Text>
          <Text style={tw`font-extrabold`}>
            <Currency quantity={basketTotal + 5.99} currency="INR" />
          </Text>
        </View>

        <TouchableOpacity style={tw`rounded-lg mt-4 bg-[#00CCBB] p-4`}>
            <Text style={tw`text-center text-white text-lg font-bold`}>Place Order</Text>
        </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    paddingTop: 5,
    backgroundColor: "white",
  },
});

export default BasketScreen;
