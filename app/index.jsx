import { StyleSheet, Text, Image } from "react-native";
import Logo from "../assets/img/logo_light.png";
import { Link } from "expo-router";

// themed components
import ThemeView from "../components/ThemeView";
import ThemedLogo from "../components/ThemedLogo";

const Home = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Text style={[styles.title, { color: "purple" }]}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
      <Link href="./about" style={styles.link}>
        About Page
      </Link>
      <Link href="./contact" style={styles.link}>
        Contact Page
      </Link>
    </ThemeView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    marginVertical: 20,
    borderRadius: 25,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
