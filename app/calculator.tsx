import Calculator from "@/components/calculator/Calculator";
import HomeButton from "@/components/common/HomeButton";
import { Insets, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function CalculatorPage() {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <View style={styles.header}>
          <HomeButton />
        </View>
        <Calculator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const getStyles = (insets: Insets) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: insets.top,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
  },
});
