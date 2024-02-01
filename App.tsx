import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {store} from './store/redux/store';
// import {FavProvider} from './store/context/FavContext';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoriesOverviewScreen from './screens/CategoriesOverviewScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import FavrouiteScreen from './screens/FavrouiteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreens() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: '#e4baa1',
        drawerActiveTintColor: '#351401',
        drawerInactiveTintColor: '#fef9f6',
        drawerStyle: {
          backgroundColor: '#351401',
          // width: 240,
        },
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#4f220987'},
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <IonIcons name="list-outline" size={size} color={color} />
          ),
          title: 'All Categories',
        }}
      />
      <Drawer.Screen
        name="FavScreen"
        component={FavrouiteScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <IonIcons name="heart-outline" size={size} color={color} />
          ),
          title: 'Favorites',
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <FavProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#351401',
              },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: '#3f2f25',
              },
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerScreens}
              options={{title: 'All Categories', headerShown: false}}
            />
            <Stack.Screen
              name="CategoriesOverview"
              component={CategoriesOverviewScreen}
              // we can have access of route and navigation in option obj through a callback
              // options={({navigation,route}) => {
              //   const catId = route.params.categoryId;
              //   return {title: catId};
              // }}
            />
            <Stack.Screen
              name="MealsDetail"
              component={MealsOverviewScreen}
              options={{
                title: 'Meals Detail',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavProvider> */}
    </>
  );
};

export default App;
