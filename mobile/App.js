import React, { useState } from 'react';
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
import Menu from './src/views/menu';
import AboutUs from './src/views/AboutUs'
import Profile from './src/views/auth/Profile'
import NavBar from './src/layouts/NavBar';

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

function ProfileScreen({ navigation }) {
    const [currentView, setCurrentView] = useState('Profile');
  return (
    <HomeLayout>
      <Profile navigation={navigation}/>
      <NavBar navigation={navigation} currentView={currentView} onNavigate={setCurrentView}/>
    </HomeLayout>
  );
}

function MenuScreen({ navigation }){
  const [currentView, setCurrentView] = useState('Menu');
  return (
    <HomeLayout>
        <Menu navigation={navigation}/>
        <NavBar navigation={navigation} currentView={currentView} onNavigate={setCurrentView}/>
    </HomeLayout>
  )
}

function AboutUsScreen({ navigation }){
  const [currentView, setCurrentView] = useState('AboutUs');
  return (
    <HomeLayout>
        <AboutUs navigation={navigation}/>
        <NavBar navigation={navigation} currentView={currentView} onNavigate={setCurrentView}/>
    </HomeLayout>
  )
}

function IndexFriendsScreen({ navigation }) {
  const [currentView, setCurrentView] = useState('Index');
  return (
    <FriendsLayout>
      <Index navigation={navigation} />
      <NavBar navigation={navigation} currentView={currentView} onNavigate={setCurrentView}/>
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
      <Stack.Navigator initialRouteName="Menu" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Friends" component={FriendsLayout} />
        <Stack.Screen name="Index" component={IndexFriendsScreen} />
        <Stack.Screen name="AddFriend" component={AddFriendsScreen} />
        <Stack.Screen name="EditFriend" component={EditFriendsScreen} />
        <Stack.Screen name="Menu" component={MenuScreen}/>
        <Stack.Screen name="AboutUs" component={AboutUsScreen}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}