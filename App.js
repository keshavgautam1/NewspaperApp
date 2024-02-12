import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import BusinessScreen from './screens/Business';
import HealthScreen from './screens/Health';
import TechScreen from './screens/Tech';
import SportsScreen from './screens/Sports';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import ConvertNumberIntoHex from 'normalize-css-color';



const Tab = createBottomTabNavigator();



export default function App() {
  return (
<NavigationContainer>
    <Tab.Navigator tabBarOptions={{showLabel: false, activeTintColor:'#00ced1'}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown:false,
        tabBarIcon: (props)=> (
          <Ionicons name="home" size={24} color={props.color} />    
          ),
      }} />
      <Tab.Screen name="Business" component={BusinessScreen} options={{
       headerShown:false,
       tabBarIcon: (props)=> (
        <Ionicons name="business" size={24} color={props.color} />
          ),
        }}/>
      <Tab.Screen name="Health" component={HealthScreen} options={{
        headerShown:false,
        tabBarIcon: (props)=> (
        <FontAwesome5 name="heartbeat" size={24} color={props.color} />        ),
        }} />
      <Tab.Screen name="Tech" component={TechScreen} options={{
        headerShown:false,
        tabBarIcon: (props)=> (
        <Ionicons name="hardware-chip" size={24} color={props.color} />        ),
        }} />
      <Tab.Screen name="Sports" component={SportsScreen} options={{
        headerShown:false,
        tabBarIcon: (props)=> (
        <MaterialIcons name="sports-cricket" size={24} color={props.color} />      
        ),
        }} />

    </Tab.Navigator>
    <StatusBar style='auto'/>
  </NavigationContainer>
  );

}


