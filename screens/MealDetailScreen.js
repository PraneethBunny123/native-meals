import { Text, View } from "react-native";

export default function MealDetailScreen({route}) {
    const item = route.params.item

    return (
        <View>
            <Text>Meal detail - {item.title}</Text>
        </View>
    )
}