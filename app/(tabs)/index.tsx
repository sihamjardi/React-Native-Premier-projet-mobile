import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import MainCard from "@/components/MainCard";
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <AppHeader />

      <View style={styles.content}>
        <MainCard />  {/* Ajout de la carte centrale */}
      </View>

      <AppFooter />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
