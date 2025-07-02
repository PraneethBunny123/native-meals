import { View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealOverviewScreen({route}) {
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    return (
        <View>
            <FlatList 
                data={displayedMeals}
                keyExtractor={item => item.id} 
                renderItem={itemData => itemData.item.title}
            />
        </View>
    )
}