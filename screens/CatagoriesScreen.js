import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CatagoryGridItem from "../components/CatagoryGridItem";

function CatagoriesScreen(props) {
  function renderCatagoryItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CatagoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

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
