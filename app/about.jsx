import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: "purple" }]}>About Page</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        aut, amet tempora est ipsa quod dolor sit quis fugit repellendus nobis
        facere dolorum vero modi autem possimus debitis hic ea?
      </Text>
      <Link href="/" style={styles.link}>
        Back Home
      </Link>
    </View>
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
    fontFamily: "Times New Roman",
  },
});
