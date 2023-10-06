import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeLayout from './src/layouts/Home'
import FriendsLayout from './src/layouts/Friends'
import Login from './src/views/auth/Login'
import Register from './src/views/auth/Register';
import Index from './src/views/friends/Index';
import AddFriend from './src/views/friends/AddFriend';
import EditFriend from './src/views/friends/EditFriend';
import Menu from './src/layouts/menu';

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

function MenuScreen({ navigation }){
  return (
    <HomeLayout>
        <Menu navigation={navigation}/>
    </HomeLayout>
  )
}

function IndexFriendsScreen({ navigation }) {
  return (
    <FriendsLayout>
      <Index navigation={navigation} />
    </FriendsLayout>
  );
}

function AddFriendsScreen({ navigation }) {
  return (
    <FriendsLayout>
      <AddFriend navigation={navigation} />
    </FriendsLayout>
  );
}

function EditFriendsScreen({ navigation }) {
  return (
    <FriendsLayout>
      <EditFriend navigation={navigation} />
    </FriendsLayout>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Friends" component={FriendsLayout} />
        <Stack.Screen name="Index" component={IndexFriendsScreen} />
        <Stack.Screen name="AddFriend" component={AddFriendsScreen} />
        <Stack.Screen name="EditFriend" component={EditFriendsScreen} />
        <Stack.Screen name="Menu" component={MenuScreen}/>
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