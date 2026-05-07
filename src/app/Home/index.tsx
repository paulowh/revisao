import { Text, View, StyleSheet } from 'react-native'
import { useState } from 'react';

import Button from "@/components/Button";
import Input from "@/components/Input"

export default function App() {
  const [contador, setContador] = useState(5)

  function fnAumentarContador(numero: number) {
    if (contador) {

    }
    setContador(contador + numero)
  }

  function fnZerarContador() {
    setContador(0)
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder='Aqui é meu primeiro input'
        value={String(contador)} />
      {/* <Input readOnly /> */}
      <Button text="+1"
        isAtivado
        activeOpacity={0.4}
        onPress={() => fnAumentarContador(1)}
      />

      <Button text="+3"
        isAtivado={false}
        activeOpacity={0.1}
        onPress={() => fnAumentarContador(3)}
      />

      <Button text="-1"
        isAtivado={true}
        activeOpacity={0.4}
        onPress={() => fnAumentarContador(-1)} />

      <Button text="Zerar"
        isAtivado={false}
        activeOpacity={0.4}
        onPress={() => fnZerarContador()} />
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