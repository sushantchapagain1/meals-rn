import {FlatList, View} from 'react-native';
import React from 'react';
import MealCard from './MealCard';

const MealList = ({items}: any) => {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={items => <MealCard {...items} />}
      />
    </View>
  );
};

export default MealList;
