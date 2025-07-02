import { View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealOverviewScreen({route}) {
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    function mealOverviewItem(itemData) {
        return (
            <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
        )
    }

    return (
        <View>
            <FlatList 
                data={displayedMeals}
                keyExtractor={item => item.id} 
                renderItem={mealOverviewItem}
            />
        </View>
    )
}