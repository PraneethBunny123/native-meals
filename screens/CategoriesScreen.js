import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen() {
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}    
            renderItem={(itemData) => itemData.item.title}
        />
    )
}