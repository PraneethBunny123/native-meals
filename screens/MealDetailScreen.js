import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components//MealDetail/Subtitle";
import List from '../components/MealDetail/List';
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../components/Icon";
import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailScreen({route, navigation}) {
    const favoriteMealsCtx = useContext(FavoritesContext)

    const mealId = route.params.id


    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

    function handleIconPress() {
        if(mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId)
        } else {
            favoriteMealsCtx.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton 
                    icon={mealIsFavorite ? 'star' : 'star-outline'} 
                    color='white' 
                    handleIconPress={handleIconPress} 
                />
            )
        })
    }, [navigation, handleIconPress])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title} >{selectedMeal.title}</Text>
            <MealDetails 
                affordability={selectedMeal.affordability} 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}  
                textStyle={styles.detailText}  
            />
            <View style={styles.listOuterContainer} >
                <View style={styles.listContainer} >
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
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
    
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})