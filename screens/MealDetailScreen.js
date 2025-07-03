import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";

export default function MealDetailScreen({route}) {
    const mealId = route.params.id

    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    function listRender(itemData) {
        return (
            <Text>{itemData.item}</Text>
        )
    }

    return (
        <View>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title} >{selectedMeal.title}</Text>
            <MealDetails 
                affordability={selectedMeal.affordability} 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}  
                textStyle={styles.detailText}  
            />
            <Subtitle>Ingredients</Subtitle>
            <FlatList 
                data={selectedMeal.ingredients}
                keyExtractor={item => item}
                renderItem={listRender}
            />
            <Subtitle>steps</Subtitle>
            <FlatList 
                data={selectedMeal.steps}
                keyExtractor={item => item}
                renderItem={listRender}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 24,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color:'white'
    },
    subtitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})