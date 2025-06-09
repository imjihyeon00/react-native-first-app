import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */

interface HeaderProps {
  title: string;
}
const Header = (props: HeaderProps) => {
  return (
    <Text>{props.title}</Text>
  );
}

const MyProfile = () => {
  return (
    <Profile 
      name="임지현" 
      profileSize={40}
    />
  );
}

const Division = () => {
  return (
    <Text>Division</Text>
  );
}

const FriendSection = () => {
  return (
    <Text>FriendSection</Text>
  );
}

const FriendList = () => {
  return (
    <View>
      <Profile 
        name='홍길동'
        uri='https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Profile 
        name='김철수'
        uri='https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Profile 
        name='이영희'
        uri='https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Profile 
        name='박민수'
        uri='https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Profile 
        name='최지우'
        uri='https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Profile 
        name='정수빈'
        uri='https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
      />
    </View>
  );
}

interface ProfileProps {
  name?: string;
  uri?: string;
  profileSize?: number;
}
const Profile = (props:ProfileProps) => {
  return (
    <View style={{flexDirection: "row"}}>
      <Image 
        source={{uri: props.uri || 'https://picsum.photos/200'}} 
        style={{
          width: props.profileSize || 30, 
          height: props.profileSize || 30,
          borderRadius: 25,
        }}  
      />
      <Text>{props.name}</Text>
    </View>
  );
}


export default function MakeView() {
  return (
    <View style={styles.container}>
      <Header title="친구"/>
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
