import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='categories' component={CategoriesScreen} />
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
                        }}    
                    />
                    <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
                    <Stack.Screen name='MealDetail' component={MealDetailScreen} />
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
