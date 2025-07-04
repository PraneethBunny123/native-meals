import { StyleSheet } from "react-native";
import { Image, Pressable, Text, Platform } from "react-native";
import { View } from "react-native";
import MealDetails from '../MealDetail/MealDetails';
import { useNavigation } from "@react-navigation/native";

export default function MealItem({title, imageUrl, affordability, complexity, duration, handleMealItemPress}) {

    return (
        <View style={styles.mealItem} >
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => 
                    pressed ? styles.buttonPressed : null
                }  
                onPress={handleMealItemPress}
            >
                <View style={styles.innerContainer} >
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title} >{title}</Text>
                    </View>
                    <MealDetails 
                        affordability={affordability} 
                        duration={duration}
                        complexity={complexity}    
                    />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})