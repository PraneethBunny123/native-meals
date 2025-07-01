import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen() {
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}    
            renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
        />
    )
}