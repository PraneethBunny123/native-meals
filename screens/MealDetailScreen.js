import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

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
            <View style={styles.subtitleContainer} >
                <Text style={styles.subtitle} >Ingredients</Text>
            </View>
            <FlatList 
                data={selectedMeal.ingredients}
                keyExtractor={item => item}
                renderItem={listRender}
            />
            <View style={styles.subtitleContainer} >
                <Text style={styles.subtitle} >Steps</Text>
            </View>
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
        padding: 6,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',
    }
})