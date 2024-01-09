import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

type CategoryCardProps = {
  title: string;
  color: string;
};

const CategoryCard = ({color, title}: CategoryCardProps) => {
  return (
    <View style={styles.item}>
      <Pressable
        style={({pressed}) => [
          styles.itemInner,
          pressed ? styles.textPressed : null,
          {backgroundColor: color},
        ]}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 150,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    borderRadius: 8,
    backgroundColor: 'white', //imp to add for shadow effect

    margin: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  itemInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  textPressed: {opacity: 0.5},
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
