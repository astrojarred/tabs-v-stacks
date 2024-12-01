import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function You() {
    const { name } = useLocalSearchParams();

    return (
        <View>
            <Text>This is the page for {name}</Text>
        </View>
    );
}
