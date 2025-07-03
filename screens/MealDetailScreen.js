import { Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealDetailScreen({route}) {
    const mealId = route.params.id

    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View>
            <Text>Meal detail - {selectedMeal.title}</Text>
        </View>
    )
}