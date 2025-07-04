import { View, FlatList, StyleSheet } from "react-native"
import MealItem from "./MealItem"

export default function MealList({mealsList, navigation}) {
    function mealOverviewItem(itemData) {
        const item = itemData.item

        function handleMealItemPress() {
            navigation.navigate("MealDetail", {
                id: item.id
            })
        }

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
        <View style={styles.container}>
            <FlatList 
                data={mealsList}
                keyExtractor={item => item.id} 
                renderItem={mealOverviewItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})