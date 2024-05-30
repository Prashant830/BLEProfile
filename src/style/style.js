// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  itemImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  containerBar: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20, // Adjust as needed for top bar
    paddingBottom: 15, // Adjust as needed for bottom bar
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: 34,
    height: 35,
  },
  containerProfile: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userImageContainer: {
    height: '40%', // Adjust as needed
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'Top',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
