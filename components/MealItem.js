import { StyleSheet } from "react-native";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native";

export default function MealItem({title, imageUrl, affordability, complexity, duration}) {
    return (
        <View>
            <Pressable>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image} />
                    <Text style={styles.title} >{title}</Text>
                </View>
                <View>
                    <Text>{duration}</Text>
                    <Text>{complexity.toUpperCase()}</Text>
                    <Text>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
})