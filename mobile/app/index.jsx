import { Background } from "@react-navigation/elements";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "blue" }}>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about">About</Link>

    </View>
  );
}

const styles = StyleSheet .create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  heading: {
    fontSize: 24,
    color: "white",
  },
});

