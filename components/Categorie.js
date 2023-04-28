import { View, ScrollView, Text } from "react-native";
import CategoriesCard from "./CategoriesCard";

const Categorie = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Tresting"  />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Tresting" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Tresting" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Tresting" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Tresting" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Tresting" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Tresting" />
    </ScrollView>
  );
};

export default Categorie;
