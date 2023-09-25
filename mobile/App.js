import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeLayout from './src/layouts/Home'
import FriendsLayout from './src/layouts/Friends'
import Login from './src/views/auth/Login'
import Register from './src/views/auth/Register';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  return (
    <HomeLayout>
      <Login navigation={navigation} />
    </HomeLayout>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <HomeLayout>
      <Register navigation={navigation} />
    </HomeLayout>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Friends" component={FriendsLayout} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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