import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps & {
    text: string,
    idButton: number,
    isAtivado: boolean
}

export default function Button({ text, idButton, isAtivado, ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
            style={
                isAtivado === true
                    ? [style.button, style.buttonAtivo]
                    : [style.button, style.buttonDesativado]
            }
        // style={style.button}
        >
            <Text
                style={style.textoButton}
            >
                {text !== '' ? idButton + ' ' + text : "Botão desconfigurado!"}
            </Text>
        </TouchableOpacity >
    )
}