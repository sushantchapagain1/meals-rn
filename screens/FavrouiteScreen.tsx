import React from 'react';
import {Text, View} from 'react-native';

import {useFav} from '../store/context/FavContext';

function FavrouiteScreen() {
  const {favIds} = useFav();

  return (
    <View>
      <Text>FavrouiteScreen</Text>
    </View>
  );
}

export default FavrouiteScreen;
