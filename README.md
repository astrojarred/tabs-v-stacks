# Expo router minimal example

### Table of contents

- [Challenge](#challenge)
- [Solution](#solution)

## Challenge
Minimal example to show the difficulty of combining Tabs and Stacks with `expo-router`.
Example before solution [on the `example` branch](https://github.com/astrojarred/tabs-v-stacks/tree/example).

With the structure below we have two behaviors:
- `/items` are inside the tab bar. We can see the tab bar when navigating to an item page, but we don't have back buttons or swipeback gestures.
- `/people` are outside the tab bar. We have back buttons and swipeback gestures, but we don't see the tab bar and *must* use the back button to navigate back to the tab view.

```
- _layout.tsx
- /(tabs)
   - _layout.tsx (expo-router Tabs, items tab is hidden with `href = null`) 
   - index.tsx
   - explore.tsx
   - /items
      - _layout.tsx (expo-router Stack)
      - [id].tsx
      - gooditem.tsx
- /people
   - _layout.tsx (expo-router Stack)
   - [name].tsx
   - you.tsx
```

## Solution

The solution is to use shared routes together with the `segment` prop to conditionally set the layout.

- Expo docs on [Shared routes](https://docs.expo.dev/router/advanced/shared-routes/)
- Stack exchange on [shared routes and segment](https://stackoverflow.com/questions/78592895/link-to-a-route-with-expo-router-outside-of-the-current-tab-stack-while-keeping)

```
- _layout.tsx
- /(tabs)
   - _layout.tsx
   - /(home,explore)
      - index.tsx
      - explore.tsx
      - /items
         - _layout.tsx (expo-router Stack)
         - [id].tsx
         - gooditem.tsx
      - /people
         - _layout.tsx (expo-router Stack)
         - [name].tsx
         - you.tsx
```

And the key layout file:
```tsx
// (tabs)/(home,explore)/_layout.tsx

import { Stack } from "expo-router"
import { useMemo } from "react"

const Layout = ({ segment }: { segment: string }) => {

   // use `segment` to conditionally set the root screen
   const rootScreen = useMemo(() => {
      switch (segment) {
         case '(home)':
               return <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
         case '(explore)':
               return <Stack.Screen name="explore" options={{ title: 'Explore', headerShown: false }} />
      }
   }, [segment])

   // shared routes go here
   return (
      <Stack>
         {rootScreen}
         <Stack.Screen name="items" options={{ title: 'Items' }} />
         <Stack.Screen name="people" options={{ title: 'People' }} />
      </Stack>
   )
}

export default Layout
```
