import { Stack } from "expo-router"
import { useMemo } from "react"

const Layout = ({ segment }: { segment: string }) => {
    const rootScreen = useMemo(() => {
        switch (segment) {
            case '(home)':
                return <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
            case '(explore)':
                return <Stack.Screen name="explore" options={{ title: 'Explore', headerShown: false }} />
        }
    }, [segment])

    return (
        <Stack>
            {rootScreen}
            <Stack.Screen name="items" options={{ title: 'Items' }} />
            <Stack.Screen name="people" options={{ title: 'People' }} />
        </Stack>
    )
}

export default Layout
