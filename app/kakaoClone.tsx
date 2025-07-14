import MyProfile from '@/components/kakaoClone/Profile';
import Header from '@components/kakaoClone/Header';
import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native';
import Division from '@/components/kakaoClone/Division';
import FriendList from '@/components/kakaoClone/FriendList';
import FriendSection from '@/components/kakaoClone/FriendSection';
import Margin from '@/components/kakaoClone/Margin';
import TabBar from '@/components/kakaoClone/TabBar';
import { friendProfiles, myProfile } from '@lib/data';
import { View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets
} from 'react-native-safe-area-context';


export default function MakeView() {
  const insets = useSafeAreaInsets();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0) // tab index state 0:친구, 1:채팅, 2:쇼핑, 3:설정

  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: insets.top,
    },
  }

  const onPressFriendArrow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <View style={{ flex: 1, paddingHorizontal: 15}}>
          <Header />
          <Margin height={10} />
          <MyProfile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
          />
          <Margin height={15} />
          <Division />
          <Margin height={12} />

          <FriendSection
            friendProfileLen={friendProfiles.length}
            onPress={onPressFriendArrow}
            isOpen={isOpen}
          />
          <FriendList
            data={friendProfiles}
            isOpen={isOpen}
          />
        </View> 
        <TabBar 
          selectedTabIdx={selectedTabIdx} 
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
