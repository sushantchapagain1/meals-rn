import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy-data';

const CategoriesOverviewScreen = ({route}: any) => {
  const catId = route.params.categoryId;
  const filteredMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  return (
    <View>
      <FlatList
        data={filteredMeals}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Image source={{uri: item.imageUrl}} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CategoriesOverviewScreen;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '90%',
    margin: 12,

    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
});
