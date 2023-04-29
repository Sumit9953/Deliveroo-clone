import { View, ScrollView, Text } from "react-native";
import CategoriesCard from "./CategoriesCard";
import { useEffect, useState } from "react";
import sanityClient from "../sanity";

const Categorie = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
      `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((categorie) => (
        <CategoriesCard
          key={categorie._id}
          imgUrl={categorie.image}
          title={categorie.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categorie;
