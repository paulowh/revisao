import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    button: {
        backgroundColor: 'tomato',
        padding: 8,
        paddingHorizontal: 32,
        borderRadius: 10,
        minWidth: 320,
        marginTop: 8
    },
    textoButton: {
        fontSize: 24,
        color: '#f2f2f2',
        fontWeight: 700,
        textAlign: 'center'
    },
    buttonAtivo: {
        backgroundColor: '#140c83',
    },
    buttonDesativado: {
        backgroundColor: '#DF2040'
    }

})