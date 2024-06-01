import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomBar from '../components/TopBottumBar';
import { styles } from '../style/homeStyle';

const SmapleData = (navigateToScreen) => {
  const topIcons = [
    { icon: require('../assets/profile.png'), onPress: () => navigateToScreen('ProfileDetail') },
    { icon: require('../assets/noti.png'), onPress: () => navigateToScreen('Notification') },
    { icon: require('../assets/chat.png'), onPress: () => navigateToScreen('Chat') },
  ];

  const bottomIcons = [
    { icon: require('../assets/settings.png'), onPress: () => navigateToScreen('Setting') },
    { icon: require('../assets/refress.png'), onPress: () => navigateToScreen('Home') },
    { icon: require('../assets/profile.png'), onPress: () => navigateToScreen('ProfileDetail') },
  ];

  const data = [
    { 
      id: '1', 
      name: 'Item 1', 
      profileViews: [
        { id: '1-1', initials: 'AB', image: require('../assets/person.jpeg') },
        { id: '1-2', initials: 'CD', image: require('../assets/person.jpeg') },
        { id: '1-3', initials: 'EF', image: require('../assets/person.jpeg') },
        { id: '1-4', initials: 'GH', image: require('../assets/person.jpeg') },
        { id: '1-5', initials: 'IJ', image: require('../assets/person.jpeg') },
        { id: '1-6', initials: 'AB', image: require('../assets/person.jpeg') },
        { id: '1-7', initials: 'CD', image: require('../assets/person.jpeg') },
        { id: '1-8', initials: 'EF', image: require('../assets/person.jpeg') },
        { id: '1-9', initials: 'GH', image: require('../assets/person.jpeg') },
        { id: '1-10', initials: 'IJ', image: require('../assets/person.jpeg') },
        { id: '1-11', initials: 'CD', image: require('../assets/person.jpeg') },
        { id: '1-12', initials: 'EF', image: require('../assets/person.jpeg') },
        { id: '1-13', initials: 'GH', image: require('../assets/person.jpeg') },
        
      ]
    },
    { 
      id: '2', 
      name: 'Item 2', 
      profileViews: [
        { id: '2-1', initials: 'AB', image: require('../assets/person.jpeg') },
        { id: '2-2', initials: 'CD', image: require('../assets/person.jpeg') },
        { id: '2-3', initials: 'EF', image: require('../assets/person.jpeg') },
        { id: '2-4', initials: 'GH', image: require('../assets/person.jpeg') },
        { id: '2-5', initials: 'IJ', image: require('../assets/person.jpeg') },
        { id: '2-6', initials: 'AB', image: require('../assets/person.jpeg') },
        { id: '2-7', initials: 'CD', image: require('../assets/person.jpeg') },
        { id: '2-8', initials: 'EF', image: require('../assets/person.jpeg') },
        { id: '2-9', initials: 'GH', image: require('../assets/person.jpeg') },
        { id: '2-10', initials: 'IJ', image: require('../assets/person.jpeg') },
        { id: '2-11', initials: 'CD', image: require('../assets/person.jpeg') },
        { id: '2-12', initials: 'EF', image: require('../assets/person.jpeg') },
        { id: '2-13', initials: 'GH', image: require('../assets/person.jpeg') },
        
      ]
    },
    { 
      id: '3', 
      name: 'Item 3', 
      profileViews: [
        { id: '3-1', initials: 'AB', image: require('../assets/person.jpeg') },
        { id: '3-2', initials: 'CD', image: require('../assets/person.jpeg') },
        { id: '3-3', initials: 'EF', image: require('../assets/person.jpeg') },
        { id: '3-4', initials: 'GH', image: require('../assets/person.jpeg') },
        { id: '3-5', initials: 'IJ', image: require('../assets/person.jpeg') },
        { id: '3-6', initials: 'AB', image: require('../assets/person.jpeg') },
        { id: '3-7', initials: 'CD', image: require('../assets/person.jpeg') },
        { id: '3-8', initials: 'EF', image: require('../assets/person.jpeg') },
        { id: '3-9', initials: 'GH', image: require('../assets/person.jpeg') },
        { id: '3-10', initials: 'IJ', image: require('../assets/person.jpeg') },
        { id: '3-11', initials: 'CD', image: require('../assets/person.jpeg') },
        { id: '3-12', initials: 'EF', image: require('../assets/person.jpeg') },
        { id: '3-13', initials: 'GH', image: require('../assets/person.jpeg') },
        ]
    },
  ];

  return { topIcons, bottomIcons, data };
};

// Function to calculate the position of the bubbles based on index
const getBubblePosition = (index) => {
  const positions = [
    { top: "10%", left: '25%' },
    { top: '15%', right: '-20%' },
    { top: '60%', left: '3%' },
    { top: '15%', left: '-30%' },
    { top: '60%', right: '3%' },
    { top: "-45%", left: '-15%' },
    { top: '-45%', right: '-10%' },
    { top: '-80%', right: '30%' },
    { top: '110%', left: '35%' },
    { top: '110%', left: '90%' },
    { top: '110%', left: '-20%' },
    { top: '110%', left: '90%' },
    { top: '160%', right: '0%' },

  ];
  return {
    position: 'absolute',
    ...positions[index],
  };
};



const HomeScreen = () => {
  const navigation = useNavigation();
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  const { topIcons, bottomIcons, data } = SmapleData(navigateToScreen);

  return (
    <View style={styles.container}>
      {/* Custom top bar */}
      <CustomBar Icons={topIcons} />

      {/* Main content */}
      {/* Horizontal FlatList of items */}
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.profileViewContainer}>
              {item.profileViews.map((profile, index) => (
                <View key={profile.id} style={[styles.profileContainer, getBubblePosition(index)]}>
                  <Image source={profile.image} style={styles.profileImage} />
                  <Text style={styles.profileInitials}>{profile.initials}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Custom bottom bar */}
      <CustomBar Icons={bottomIcons} />
    </View>
  );
};


export default HomeScreen;
