import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';


export default function App() {
  // control when game is running 
  const [running, setrunning] = useState(false);

  // set setrunning(true) if you want game to run, false otherwise 
  useEffect(() => {
    setrunning(true)
  }, []);

  return (
    <View style={styles.container}>
      <GameEngine
        systems={[Physics]}
        entities={entities()}
        running={running}
        style={styles.game_engine}
      >

      </GameEngine>

      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  game_engine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
