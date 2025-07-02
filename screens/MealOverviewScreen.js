import { View, Text } from "react-native";

export default function MealOverviewScreen({route}) {
    const categoryId = route.params.categoryId

    return (
        <View>
            <Text>Meal Overview - {categoryId}</Text>
        </View>
    )
}