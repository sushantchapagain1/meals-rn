import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy-data';

const MealsOverviewScreen = ({route}: any) => {
  const mealsId = route.params.mealsId;
  const meal = MEALS.find(meal => meal.id === mealsId);

  // not separating repeated and reusable styling,colors  and compo on purpose to save time .

  return (
    meal && (
      <ScrollView>
        <View>
          <Image source={{uri: meal.imageUrl}} style={styles.image} />
          <View>
            <Text style={styles.title}>{meal.title}</Text>
            <View style={styles.mealDesc}>
              <Text style={styles.mealDescText}>{meal.duration}m</Text>
              <Text style={styles.mealDescText}>{meal.complexity}</Text>
              <Text style={styles.mealDescText}>{meal.affordability}</Text>
            </View>
            <View>
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Ingredients</Text>
              </View>
              {meal.ingredients.map((ingredient: string) => (
                <View key={ingredient} style={styles.subtitleList}>
                  <Text>{ingredient}</Text>
                </View>
              ))}
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Steps</Text>
              </View>

              {meal.steps.map((step: string) => (
                <View key={step} style={styles.subtitleList}>
                  <Text>{step}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    )
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  image: {
    height: 350,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    margin: 8,
  },
  mealDesc: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealDescText: {
    textAlign: 'center',
    color: 'white',
  },
  subTitleContainer: {
    borderTopColor: '#e2b497',
    borderTopWidth: 1,
    margin: 12,
  },
  subTitle: {
    color: '#f2f2f2',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    margin: 12,
  },
  subtitleList: {
    backgroundColor: '#e2b497',
    marginVertical: 4,
    marginHorizontal: 16,
    padding: 6,
    borderRadius: 4,
  },
});
