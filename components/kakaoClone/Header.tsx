import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeButton from '../common/HomeButton';

type IconProps = {
  name: React.ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: string;
};

const IconButton = ({ name, size = 24, color = 'black' }: IconProps) => {
  return (
    <TouchableOpacity hitSlop={{top: 15, bottom: 15 }} style={{paddingHorizontal: 6 }}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const Header = () => {
  

  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <HomeButton />
        <Text style={styles.title}>친구</Text>
      </View>
      <View style={{ flexDirection: 'row' }} >
        <IconButton name="search-outline"  />
        <IconButton name="person-add-outline"  />
        <IconButton name="musical-notes-outline"  />
        <IconButton name="settings-outline"  />
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  }
});