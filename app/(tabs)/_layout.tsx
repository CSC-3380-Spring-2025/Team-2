import { Tabs } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#989769',
            headerStyle: {
                backgroundColor: '#F2F1EB',
              },
              headerShadowVisible: false,
              headerTintColor: '#F2F1EB',
              tabBarStyle: {
              backgroundColor: '#E7E9D0',
              },
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
                <Octicons name="home" size={24} color="#989769" />
            ),
        }}
        />
      <Tabs.Screen
        name="rewards"
        options={{
            title: 'Rewards',
            tabBarIcon: ({ color, focused }) => (
            <Octicons name="star" size={24} color="#989769" />
            ),
        }}
        />
      <Tabs.Screen
        name="menu" 
        options={{
            title: 'Menu',
            tabBarIcon: ({ color, focused }) => (
                <Octicons name="list-unordered" size={24} color="#989769" />
            ),
        }}
        />

    </Tabs>
  );
}
