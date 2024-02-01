import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types.screen';

type TProps = {
  item: {
    id: string;
    imageUrl: string;
    title: string;
    duration: number;
    complexity: number;
    affordability: boolean;
  };
};

interface TNavigation extends NavigationProp<RootStackParamList> {}

const MealCard = ({item}: TProps) => {
  const navigation = useNavigation<TNavigation>();

  const {id, imageUrl, title, duration, complexity, affordability} = item;

  function handlePress(id: string) {
    navigation.navigate('MealsDetail', {mealId: id});
  }

  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={() => handlePress(id)}>
      <View style={styles.item}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <View style={styles.itemDetail}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.itemDesc}>
            <Text>{duration}m</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MealCard;

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
