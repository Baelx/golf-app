import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View>
      <Text>Birdie</Text>
      <Link href="/new-game">New Game</Link>
      <Link href="/home">View Stats</Link>
    </View>
  )
}