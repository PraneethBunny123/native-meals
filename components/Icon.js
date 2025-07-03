import { Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons'

export default function IconButton() {
    return (
        <Pressable>
            <Ionicons name="star" size={24} color='white' />
        </Pressable>
    )
}