import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#351401'},
                headerTintColor: 'white',
                sceneContainerStyle: {backgroundColor: '#3f2f25'},
                drawerContentStyle: {backgroundColor: '#351401'},
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e4baa1'
            }}
        >
            <Drawer.Screen 
                name='categories' 
                component={CategoriesScreen} 
                options={{
                    title: 'All Categories',
                    drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />
                }} 
            />
            <Drawer.Screen 
                name='favorites' 
                component={FavoritesScreen} 
                options={{
                    drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />
                }}    
            />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName='MealsCategories'
                    screenOptions={{
                        headerStyle: {backgroundColor: '#351401'},
                        headerTintColor: 'white',
                        contentStyle: {backgroundColor: '#3f2f25'}
                    }}
                >
                    <Stack.Screen 
                        name="MealsCategories" 
                        component={DrawerNavigator} 
                        options={{
                            title: 'All Categories',
                            headerShown: false
                        }}    
                    />
                    <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
                    <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{title: 'About The Meal'}} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
