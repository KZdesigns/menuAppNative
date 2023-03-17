import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";

function MealDetailsScreen(props) {
  const mealId = props.route.params.mealId;

  const mealTitle = MEALS.find((meal) => meal.id === mealId).title;

  useLayoutEffect(
    () =>
      props.navigation.setOptions({
        title: mealTitle,
      }),
    [mealId, props.navigation]
  );

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{selectedMeal.title}</Text>
        </View>
        {/* <ScrollView style={styles.scrollContainer}> */}
        <View style={styles.ingredientsContainer}>
          <View style={{ borderBottomWidth: 2, borderColor: "gray" }}>
            <Text style={styles.ingTitle}>Ingredients:</Text>
          </View>

          {selectedMeal.ingredients.map((ingredient, index) => (
            <Text style={styles.ingredientText} key={index}>
              {ingredient}
            </Text>
          ))}
        </View>

        <View style={styles.stepsContainer}>
          <View style={{ borderBottomWidth: 2, borderColor: "gray" }}>
            <Text style={styles.stepTitle}>Steps:</Text>
          </View>
          {selectedMeal.steps.map((step, index) => (
            <Text style={styles.stepText} key={index}>
              {step}
            </Text>
          ))}
        </View>
        {/* </ScrollView> */}
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  image: {
    height: 200,
    width: "90%",
    borderRadius: 8,
  },
  title: {
    padding: 10,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  ingredientsContainer: {
    margin: 8,
  },
  ingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  ingredientText: {
    fontSize: 14,
    textAlign: "center",
    padding: 4,
  },
  stepsContainer: {
    margin: 8,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  stepText: {
    fontSize: 14,
    textAlign: "center",
    padding: 8,
  },
});
