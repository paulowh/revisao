import { Text, View, StyleSheet } from 'react-native'
import Button from "@/components/Button";
import Input from "@/components/Input"

export default function App() {
  return (
    <View style={styles.container}>
      <Input placeholder='Aqui é meu primeiro input' />
      <Input readOnly />
      <Button text="Click Aqui!!"
        idButton={23}
        isAtivado
        activeOpacity={0.4} />

      <Button text="O mesmo button"
        idButton={76}
        isAtivado={false}
        activeOpacity={0.1} />

      <Button text="5"
        idButton={67}
        isAtivado={true}
        activeOpacity={0.4} />
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