import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CatagoryGridItem from "../components/CatagoryGridItem";

function renderCatagoryItem(itemData) {
  return (
    <CatagoryGridItem title={itemData.item.title} color={itemData.item.color} />
  );
}

function CatagoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatagoryItem}
      numColumns={2}
    />
  );
}

export default CatagoriesScreen;
