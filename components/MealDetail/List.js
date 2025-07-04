import { StyleSheet, Text, View } from "react-native";

export default function List({data}) {
    return (
        data.map(dataPoint => (
            <View style={styles.listItem} key={dataPoint} >
                <Text key={dataPoint} style={styles.listItemText} >{dataPoint}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    listItemText: {
        color: '#351401',
        textAlign: 'center'
    },
})