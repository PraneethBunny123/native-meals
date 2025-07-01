import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";



export default function CategoriesScreen({navigation}) {

    function categoryItem(itemData) {

        function handleOnPress() {
            navigation.navigate("MealOverview")
        }

        return (
            <CategoryGridTitle 
                title={itemData.item.title} 
                color={itemData.item.color} 
                handleOnPress={handleOnPress}
            />
        )
    }
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}    
            renderItem={categoryItem}
            numColumns={2}
        />
    )
}