import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function categoryItem(itemData) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
}

export default function CategoriesScreen() {
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}    
            renderItem={categoryItem}
        />
    )
}