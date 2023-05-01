import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import tw from "twrnc";
import { urlFor } from "../sanity";
import Icon from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeToBasket, selectBasketItem, selectBasketItemsWithId } from "../features/basketSlice";

const DishRow = ({ id, name, description, image, price }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state,id))
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if(!items.length > 0) return;

    dispatch(removeToBasket({id}))
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={tw`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0' } `}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg mb-1`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{description}</Text>
            <Text style={tw`text-gray-400 mt-2`}>
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>

          <View>
            <Image
              style={tw.style(`h-20 w-20 bg-gray-300 p-4`, {
                borderWidth: 1,
                borderColor: "#F3F3F4",
              })}
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center pb-3`}>
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
              <Icon name="circle-with-minus" color={items.length > 0 ? "#00CCBB" : "gray"} size={40} />
            </TouchableOpacity>

            <Text style={tw`ml-2 mr-2`}>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <Icon name="circle-with-plus" color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};



const styles = StyleSheet.create({
  box: {
    borderWidth: "1px",
    backgroundColor: "white",
    padding: "4px",
    borderColor: "rgb(209 213 219)",
  }
})

export default DishRow;
