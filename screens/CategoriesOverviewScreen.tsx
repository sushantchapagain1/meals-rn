import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoriesOverviewScreen = ({navigation, route}: any) => {
  const catId = route.params.categoryId;
  const filteredMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  const catName = CATEGORIES.find(meal => meal.id === catId)?.title;

  // in useEffect this runs when the component has mounted or after component is mounted
  // but Layout effect runs simultaneously when the component is being mounted.
  // so can be used in situations like when is doing some animation or transitions.

  useLayoutEffect(() => {
    navigation.setOptions({title: catName});
  }, [navigation, catId]);

  function handlePress(mealId: number | string) {
    navigation.navigate('MealsDetail', {mealsId: mealId});
  }

  return (
    <View>
      <FlatList
        data={filteredMeals}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            style={({pressed}) => pressed && styles.pressed}
            onPress={() => handlePress(item.id)}>
            <View style={styles.item}>
              <Image source={{uri: item.imageUrl}} style={styles.image} />
              <View style={styles.itemDetail}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.itemDesc}>
                  <Text>{item.duration}m</Text>
                  <Text>{item.complexity}</Text>
                  <Text>{item.affordability}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default CategoriesOverviewScreen;

const styles = StyleSheet.create({
  item: {
    margin: 8,
  },
  pressed: {opacity: 0.7},
  image: {
    height: 200,
    marginHorizontal: 12,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  itemDetail: {
    marginHorizontal: 12,
    padding: 18,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.25,
    shadowRadius: 2,
    backgroundColor: 'white',
  },
  itemDesc: {
    flexDirection: 'row',
    gap: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
