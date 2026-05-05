import { Text, View, StyleSheet } from 'react-native'
import Button from "@/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Olá
      </Text>
      <Button text="Click Aqui!!" />
      <Button text="O mesmo button" />
      <Button text="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 24,
    backgroundColor: 'tomato',
    fontWeight: 700,
    color: '#f2f2f2'
  },
  button: {
    padding: 16,
    height: 24,
    paddingHorizontal: 24
  }
})