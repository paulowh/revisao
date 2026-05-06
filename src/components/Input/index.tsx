import { TextInput, TextInputProps } from 'react-native'
import { style } from './style'

export default function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput style={style.input} {...rest}>

        </TextInput>
    )
}