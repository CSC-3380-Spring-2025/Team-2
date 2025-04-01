//layout file for bottom navigation bar
import { Tabs } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';

export default function TabsLayout() {
  return (
    <Tabs //Tab Bar (iOS) || Nav Bar (Android)
      screenOptions={{
        tabBarActiveTintColor: '#614938', //changes icon color
        headerStyle: {
          backgroundColor: '#EEEBDB', // changers Nav bar (ios) || App bar (android)
        },
        headerShadowVisible: false,
        headerTintColor: '#614938', // changes headers color
        tabBarStyle: {
          backgroundColor: '#EEEBDB', // changes bottom nav bar (android)
        },
      }}
    >
      <Tabs.Screen
        name="home" //file.tsx name
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="home" size={24} color="#614938" />
          ),
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="star" size={24} color="#614938" />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="list-unordered" size={24} color="#614938" />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="sign-in" size={24} color="#614938" />
          ),
        }}
      />
      <Tabs.Screen
        name="createprofile"
        options={{
          title: 'signup',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="plus-circle" size={24} color="#614938" />
          ),
        }}
      />
    </Tabs>
  );
}
