import { Image, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

export default function MealDetailScreen({route}) {
    const mealId = route.params.id

    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return (
        <View>
            <Image source={{uri: selectedMeal.imageUrl}} />
            <Text>Meal detail - {selectedMeal.title}</Text>
            <MealDetails 
                affordability={selectedMeal.affordability} 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}    
            />
        </View>
    )
}