import { View, Text, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export default function MealOverviewScreen({route, navigation}) {
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [categoryId, navigation])

    function handleMealItemPress() {
        navigation.navigate("MealDetail")
    }

    function mealOverviewItem(itemData) {
        const item = itemData.item

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }

        return (
            <MealItem {...mealItemProps} handleMealItemPress={handleMealItemPress} />
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