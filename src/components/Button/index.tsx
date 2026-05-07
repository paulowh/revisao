import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps & {
    text: string,

    isAtivado: boolean
}

export default function Button({ text, isAtivado, ...rest }: Props) {
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
                {text !== '' ?  text : "Botão desconfigurado!"}
            </Text>
        </TouchableOpacity >
    )
}