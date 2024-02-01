import React from 'react';
import {FlatList} from 'react-native';

import CategoryCard from '../components/CategoryCard';
import {CATEGORIES} from '../data/dummy-data';

type CategoryItem = {id: string; color: string; title: string};

// getting navigation after using it in stack navigator only native way of doing
const CategoriesScreen = ({navigation}: any) => {
  // const navigation = useNavigation();
  //  we can directly use from hook when we donot have screen in stack navigator.

  function handleNavigation(item: CategoryItem) {
    navigation.navigate('CategoriesOverview', {categoryId: item.id});
    // navigation.navigate('CategoriesOverview', {categoryId: item.id});
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({item}) => (
        <CategoryCard
          title={item.title}
          color={item.color}
          onPress={() => handleNavigation(item)}
        />
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2} //like a grid
    />
  );
};

export default CategoriesScreen;
