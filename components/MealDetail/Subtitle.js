import { View, Text, StyleSheet } from "react-native"

export default function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer} >
            <Text style={styles.subtitle} >{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})