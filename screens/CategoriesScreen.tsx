import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryCard from '../components/CategoryCard';

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({item}) => (
        <CategoryCard title={item.title} color={item.color} />
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2} //like a grid
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
