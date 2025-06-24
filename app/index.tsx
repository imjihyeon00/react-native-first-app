import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
          Fastcampus React Native 강의 실습!!
        </Text>
        <View style={styles.linkContainer}>
          <Pressable 
            style={({ pressed }) => [
              styles.linkButton,
              pressed && styles.linkPressedButton
            ]}
            
            onPress={() => router.push('/kakaoClone')}
          >
            <Text style={styles.linkButtonText}>카카오 클론 만들기</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  linkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  linkButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  linkPressedButton: {
    backgroundColor: '#d0d0d0',
  },
  linkButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
