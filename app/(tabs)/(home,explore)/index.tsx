import { Image, Platform, StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';
import { HelloWave } from '@/components/HelloWave';
import { Link } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Help!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">People View</ThemedText>
        <ThemedText>
          The people Stack is outside of the tab bar. We have back navigation, but the tab bar is hidden.
        </ThemedText>
        <Link push href="/people/john" style={styles.button}>
          <ThemedText style={styles.buttonText}>John</ThemedText>
        </Link>
        <Link push href="/people/you" style={styles.button}>
          <ThemedText style={styles.buttonText}>You</ThemedText>
        </Link>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Item View</ThemedText>
        <ThemedText>
          The item Stack is inside of the tab bar. We can see the tab bar, but we don't have back navigation.
        </ThemedText>
        <Link push href="/items/1" style={styles.button}>
          <ThemedText style={styles.buttonText}>Item 1</ThemedText>
        </Link>
        <Link push href="/items/gooditem" style={styles.button}>
          <ThemedText style={styles.buttonText}>Good Item</ThemedText>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    padding: 8,
    backgroundColor: Colors.light.tint,
    borderRadius: 4,
  },
  buttonText: {
    color: Colors.light.background,
  },
});
