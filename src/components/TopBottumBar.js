import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { styles } from '../style/style'; // Import styles from styles.js

const TopBottumBar = ({ Icons }) => {
  return (
    <View style={styles.containerBar}>
      {/* Top bar */}
      <View style={styles.bar}>
        {Icons.map((item, index) => (
          <TouchableOpacity key={index} onPress={item.onPress}>
            <Image source={item.icon} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


export default TopBottumBar;
