import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeLayout from './src/layouts/Home'
import FriendsLayout from './src/layouts/Friends'
import Login from './src/views/auth/Login'

export default function App() {
  return (
    <View style={styles.header}>
      <HomeLayout>
        <Login />
      </HomeLayout>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#E7E0E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});