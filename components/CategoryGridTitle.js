import { Pressable, View, Text } from "react-native";

export default function CategoryGridTitle({title, color}) {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}