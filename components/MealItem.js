import { Image, Pressable, Text } from "react-native";
import { View } from "react-native";

export default function MealItem({title, imageUrl}) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{uri: imageUrl}} />
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}