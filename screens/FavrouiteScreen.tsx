import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {useFav} from '../store/context/FavContext';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

function FavrouiteScreen() {
  const {favIds} = useFav();

  if (favIds.length === 0)
    return (
      <View style={styles.emptyList}>
        <Text style={styles.emptyText}>You do not have fav currently...</Text>
      </View>
    );

  const favMeals = MEALS.filter(meals => favIds.includes(meals.id));

  return <MealList items={favMeals} />;
}

export default FavrouiteScreen;

const styles = StyleSheet.create({
  emptyList: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  emptyText: {
    fontSize: 18,
    color: 'white',
  },
});
