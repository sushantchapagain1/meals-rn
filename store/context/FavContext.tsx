// doing in both context and redux just for revision.

import React, {createContext, useContext, useState} from 'react';

interface TFavContext {
  favIds: string[];
  addFav: (id: string) => void;
  removeFav: (id: string) => void;
}

const FavContext = createContext<TFavContext>({
  favIds: [],
  addFav: (id: string) => {},
  removeFav: (id: string) => {},
});

function FavProvider({children}: {children: React.ReactNode}) {
  const [favIds, setFavIds] = useState<string[]>([]);

  function addFav(id: string) {
    setFavIds(currIds => [...currIds, id]);
  }

  function removeFav(id: string) {
    setFavIds(currIds => currIds.filter(mealId => mealId !== id));
  }

  return (
    <FavContext.Provider value={{favIds, addFav, removeFav}}>
      {children}
    </FavContext.Provider>
  );
}

function useFav() {
  const context = useContext(FavContext);
  if (context === undefined)
    throw new Error('FavContext must be wrapped inside FavProvider');
  return context;
}

export {FavProvider, useFav};
