import React, {useLayoutEffect} from 'react';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

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

  return <MealList items={filteredMeals} />;
};

export default CategoriesOverviewScreen;
