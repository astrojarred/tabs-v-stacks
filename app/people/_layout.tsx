import { Stack } from "expo-router";

export default function PeopleLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, gestureEnabled: true, headerBackTitle: "Back" }}>
            <Stack.Screen name="[name]" />
        </Stack>
    );
}
