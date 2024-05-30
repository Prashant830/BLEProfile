import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { styles } from '../style/style'; // Import styles from styles.js
import CustomBar from '../components/TopBottumBar';
import { useNavigation } from '@react-navigation/native';

const SmapleData = (navigateToScreen) => {
    const topIcons = [
      { icon: require('../assets/cross.png'), onPress: () => navigateToScreen('Home') },
      { icon: require('../assets/more.png'), onPress: () => navigateToScreen('Home') },
    ]

    return { topIcons };
}


const ProfileDetailScreen = () => {

    const navigation = useNavigation();
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
      };
      const { topIcons } = SmapleData(navigateToScreen);

  return (

    <View style={styles.containerProfile}>
      <CustomBar Icons={topIcons} />

      <View style={styles.userImageContainer}>
        <Image
          source={require('../assets/person.jpeg')} 
          style={styles.userImage}
          resizeMode="cover"
        />
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>A user is a casual name given to an individual who interacts with a website, online service, app or platform in any way. For example, the user of a website is someone who visits the site. The user of a mobile app is someone who downloads the mobile app.</Text>
        {/* Add more components as needed */}
      </View>
    </View>
  );
};


export default ProfileDetailScreen;
