import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

export default function IconButton({handleIconPress, icon, color}) {
    return (
        <Pressable 
            onPress={handleIconPress} 
            style={({pressed}) => pressed && styles.pressed}    
        >
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})