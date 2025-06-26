import MyProfile from '@/components/kakaoClone/Profile';
import Header from '@components/kakaoClone/Header';
import React from 'react';
// import { SafeAreaView } from 'react-native';
import Division from '@/components/kakaoClone/Division';
import FriendList from '@/components/kakaoClone/FriendList';
import FriendSection from '@/components/kakaoClone/FriendSection';
import Margin from '@/components/kakaoClone/Margin';
import { friendProfiles, myProfile } from '@lib/data';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets
} from 'react-native-safe-area-context';


export default function MakeView() {
  const insets = useSafeAreaInsets();

  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: insets.top,
      paddingHorizontal: 15,
    },
  }

  const onPressFriendArrow = () => {
    console.log('친구 목록 보기');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
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
        />
        <FriendList
          data={friendProfiles}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
