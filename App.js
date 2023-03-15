import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CatagoriesScreen from "./screens/CatagoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CatagoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
