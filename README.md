# Expo router minimal example

Minimal example to show the difficulty of combining Tabs and Stacks with `expo-router`.

With the structure below we have two behaviors:
- `/items` are inside the tab bar. We can see the tab bar when navigating to an item page, but we don't have back buttons or swipeback gestures.
- `/people` are outside the tab bar. We have back buttons and swipeback gestures, but we don't see the tab bar and *must* use the back button to navigate back to the tab view.

```
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
