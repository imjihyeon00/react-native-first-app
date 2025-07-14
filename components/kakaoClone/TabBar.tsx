import Ionicons from '@expo/vector-icons/Ionicons';
import { Dispatch, SetStateAction } from "react";
import { Insets, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TabBarProps {
  selectedTabIdx: number;
  setSelectedTabIdx: Dispatch<SetStateAction<number>>
}

interface TabBtnProps {
  isSelected: boolean;
  onPress: () => void;
  activeIconName: React.ComponentProps<typeof Ionicons>['name'];
  inactiveIconName: React.ComponentProps<typeof Ionicons>['name'];
}

const TabBtn = ({
  isSelected, 
  onPress, 
  activeIconName, 
  inactiveIconName,
}:TabBtnProps) => {
  return (
    <TouchableOpacity 
      activeOpacity={1}
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
      }}
    >
      <Ionicons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />
    </TouchableOpacity>
  )
}

export default function TabBar({selectedTabIdx, setSelectedTabIdx}: TabBarProps) {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  return (
    <View style={styles.tabBarContainer}>
      <TabBtn
        isSelected={selectedTabIdx === 0}
        onPress={() => setSelectedTabIdx(0)}
        activeIconName="person"
        inactiveIconName="person-outline"
      />
      <TabBtn
        isSelected={selectedTabIdx === 1}
        onPress={() => setSelectedTabIdx(1)}
        activeIconName="chatbubble"
        inactiveIconName="chatbubble-outline"
      />
      <TabBtn
        isSelected={selectedTabIdx === 2}
        onPress={() => setSelectedTabIdx(2)}
        activeIconName="pricetag"
        inactiveIconName="pricetag-outline"
      />
      <TabBtn
        isSelected={selectedTabIdx === 3}
        onPress={() => setSelectedTabIdx(3)}
        activeIconName="ellipsis-horizontal"
        inactiveIconName="ellipsis-horizontal-outline"
      />
    </View>
  )
};

const getStyles = (insets: Insets) => StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    paddingBottom: insets.bottom,
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
  }
});