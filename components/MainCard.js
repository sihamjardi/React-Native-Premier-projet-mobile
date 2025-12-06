import { StyleSheet, Text, View } from "react-native";

export default function MainCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Bienvenue !</Text>
      <Text style={styles.subtitle}>Ceci est une carte centrale réutilisable.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EDEFEE",
    padding: 20,
    borderRadius: 10,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
