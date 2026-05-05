import { TouchableOpacity, Text } from "react-native";

export default function Button({ text }) {
    return (
        <TouchableOpacity
            activeOpacity={0.1}

        >
            <Text
                style={[{ fontSize: 32 }]}
            >
                {text !== '' ? text : "Preenche certo irmão!"}
            </Text>
        </TouchableOpacity >
    )
}