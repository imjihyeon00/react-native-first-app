import { StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>Fast 강의 이론 공부</View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
