import { Stack } from "expo-router";

export default function ItemsLayout() {
    return (
        <Stack screenOptions={{ headerBackVisible: true, gestureEnabled: true, headerBackTitle: "Back", headerShown: false }}>
            <Stack.Screen name="[id]" />
            <Stack.Screen name="gooditem" />
        </Stack>
    );
}
