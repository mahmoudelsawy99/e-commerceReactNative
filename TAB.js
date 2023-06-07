import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Components/Home';
import Profile from './Components/Profile';
import Card from './Components/Card';
import Cart from './Components/Cart';
import Icon from 'react-native-vector-icons/Ionicons'
function TAB() {
    const Tab = createBottomTabNavigator();
    return <Tab.Navigator screenOptions={{ tabBarInactiveTintColor: '#391717', tabBarActiveTintColor: 'white', tabBarStyle: { backgroundColor: '#9e49bd' } }}>
        <Tab.Screen options={{
            tabBarIcon: ({ focused, color }) => {
                if (focused) {
                    return <Icon name='home' color={color} size={40} />
                }
                else
                    return <Icon name='home' color={color} size={24} />
            }
        }}
            name='home' component={Home} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name="man" color={color} size={24} /> }}
            name='profile' component={Profile} />
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name="man" color={color} size={24} /> }} name='card' component={Card}></Tab.Screen>
        {/* <Tab.Screen options={{ tabBarIcon: ({ color }) => <Icon name="cart" color={color} size={24} /> }} name='cart' component={Cart}></Tab.Screen> */}
    </Tab.Navigator>
}
export default TAB;