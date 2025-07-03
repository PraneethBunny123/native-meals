import { Text, View } from "react-native";

export default function List({data}) {
    return (
        data.map(dataPoint => (
            <View>
                <Text key={dataPoint} >{dataPoint}</Text>
            </View>
        ))
    )
}