import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoriesOverviewScreen from './screens/CategoriesOverviewScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
            name="Categories"
            component={CategoriesScreen}
            options={{title: 'All Categories'}}
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
            options={{title: 'Meals Detail'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#24180f',
  },
});
