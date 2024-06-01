import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  containerProfile: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  itemContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 185, // Adjusted height to account for top and bottom bars
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  profileViewContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileInitials: {
    position: 'absolute',
    bottom: 5,
    left: 55,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 12,
  },
});
