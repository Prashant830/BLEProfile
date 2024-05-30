import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomBar from '../components/TopBottumBar';
import { styles } from '../style/style'; // Import styles from styles.js



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
      { id: '1', name: 'Item 1', image: require('../assets/person.jpeg') },
      { id: '2', name: 'Item 2', image: require('../assets/person.jpeg') },
      { id: '3', name: 'Item 3', image: require('../assets/person.jpeg') },
      { id: '4', name: 'Item 4', image: require('../assets/person.jpeg') },
      { id: '5', name: 'Item 5', image: require('../assets/person.jpeg') },
      { id: '6', name: 'Item 4', image: require('../assets/person.jpeg') },
      { id: '7 ', name: 'Item 5', image: require('../assets/person.jpeg') },
    ];
  
    return { topIcons, bottomIcons, data };
  };
  
  
const HomeScreen = () => {

  const navigation = useNavigation();
  // Function to handle navigation to other screens
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  const { topIcons, bottomIcons, data } = SmapleData(navigateToScreen);


 

  return (
    <View style={styles.container}>
      {/* Custom top bar */}
      <CustomBar Icons={topIcons} />

      {/* Main content */}
      {/* List of items */}
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
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
