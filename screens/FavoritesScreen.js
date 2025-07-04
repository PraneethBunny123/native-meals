import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet } from "react-native";

export default function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext)

    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id) )

    if(favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text} >You have no favorite meals yet.</Text>
            </View>
        )
    }

    return (
        <MealList mealsList={favoriteMeals} />
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
})