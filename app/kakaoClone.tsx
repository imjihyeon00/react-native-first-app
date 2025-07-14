import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native';
import Division from '@/components/kakaoClone/Division';
import FriendSection from '@/components/kakaoClone/FriendSection';
import Header from '@/components/kakaoClone/Header';
import Margin from '@/components/kakaoClone/Margin';
import Profile from '@/components/kakaoClone/Profile';
import TabBar from '@/components/kakaoClone/TabBar';
import { friendProfiles, myProfile } from '@lib/data';
import { FlatList, View } from 'react-native';
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


  const renderItem = ({ item, index }:{item:any, index: number}) => (
    <Profile
      uri={item.uri}
      name={item.name}
      introduction={item.introduction}
    />
  );

  const ItemSeparatorComponent = () => <Margin height={13} />

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "#fff" }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPress={onPressFriendArrow}
        isOpen={isOpen}
      />

      <Margin height={5} />
    </View>
  );


  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <FlatList
          data={isOpen ? friendProfiles : []}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          keyExtractor={( _, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          stickyHeaderIndices={[0]} // 헤더를 고정시키기 위해 사용
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          showsVerticalScrollIndicator={false}
        />
        <TabBar
          selectedTabIdx={selectedTabIdx} 
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );

  // 기존 코드를 이용하여 FlatList로 변경할 수 있습니다.
  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView style={styles.container} edges={['left', 'right']}>
  //       <View style={{ flex: 1, paddingHorizontal: 15}}>
  //         <Header />
  //         <Margin height={10} />
  //         <MyProfile
  //           uri={myProfile.uri}
  //           name={myProfile.name}
  //           introduction={myProfile.introduction}
  //         />
  //         <Margin height={15} />
  //         <Division />
  //         <Margin height={12} />

  //         <FriendSection
  //           friendProfileLen={friendProfiles.length}
  //           onPress={onPressFriendArrow}
  //           isOpen={isOpen}
  //         />
  //         <FriendList
  //           data={friendProfiles}
  //           isOpen={isOpen}
  //         />
  //       </View> 
  //       <TabBar 
  //         selectedTabIdx={selectedTabIdx} 
  //         setSelectedTabIdx={setSelectedTabIdx}
  //       />
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
}
