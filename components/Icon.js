import { Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons'

export default function IconButton({handleIconPress}) {
    return (
        <Pressable onPress={handleIconPress} >
            <Ionicons name="star" size={24} color='white' />
        </Pressable>
    )
}