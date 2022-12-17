import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const App = () => {
  const Tab = createBottomTabNavigator()
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Home}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Home}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Feather name="shopping-cart" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Feather
                name="user"
                size={24} color="black" />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App


