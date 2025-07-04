import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext)

    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id) )

    return (
        <MealList mealsList={favoriteMeals} />
    )
}