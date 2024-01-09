import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.app}>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator>
          <Stack.Screen name="categories" component={CategoriesScreen} />
        </Stack.Navigator>
        <CategoriesScreen />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#24180f',
  },
});
