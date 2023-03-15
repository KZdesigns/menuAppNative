import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";

function CatagoryGridItem(props) {
  const { width, height } = useWindowDimensions();

  let gridItemHeight = 150;

  if (width > height) {
    gridItemHeight = 75;
  }

  return (
    <View style={[styles.gridItem, { height: gridItemHeight }]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: props.color }]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CatagoryGridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    borderWidth: 2,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
