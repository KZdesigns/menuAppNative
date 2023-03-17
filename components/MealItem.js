import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem(props) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("MealDetails", {
      mealId: props.id,
    });
  }

  return (
    <View style={styles.itemRootContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{props.duration} minutes</Text>
            <Text style={styles.detailItem}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  itemRootContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    height: 300,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
