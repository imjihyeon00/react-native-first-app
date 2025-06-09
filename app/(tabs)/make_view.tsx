import { StyleSheet, View } from 'react-native';


export default function MakeView() {
  return (
    <View style={styles.titleContainer}></View>
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
