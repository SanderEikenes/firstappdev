import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>
        Hello wrld
      </Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
