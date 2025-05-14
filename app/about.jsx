import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../Constants/Colors";
import { StatusBar } from "expo-status-bar";

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar value="auto" />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.title }]}>About Page</Text>
        <Text style={[styles.description, { color: theme.text }]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          aut, amet tempora est ipsa quod dolor sit quis fugit repellendus nobis
          facere dolorum vero modi autem possimus debitis hic ea?
        </Text>
        <Link href="/" style={[styles.link, { color: theme.text }]}>
          Back Home
        </Link>
      </View>
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  description: {
    marginHorizontal: 30,
    fontSize: 16,
  },
});
