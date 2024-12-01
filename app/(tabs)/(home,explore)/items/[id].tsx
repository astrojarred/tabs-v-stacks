import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function Item() {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>This is the item page for {id}</Text>
        </View>
    );
}
