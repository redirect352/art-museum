import React, { createContext, useReducer } from 'react';
import favoritesReducer from './reducers/favoritesReducer';

export type favoritesAction =
	| { type: 'add'; payload: number }
	| { type: 'remove'; payload: number };

export const FavoritesContext = createContext([] as number[]);
export const FavoritesDispatchContext = createContext<
	React.Dispatch<favoritesAction>
>(() => {});

const defaultValue: number[] = sessionStorage.getItem('favorites')
	? JSON.parse(sessionStorage.getItem('favorites') ?? '')
	: ([] as number[]);

export const FavoriteStoreContextProvider = ({
	children,
}: React.PropsWithChildren) => {
	const [favorites, dispatch] = useReducer(favoritesReducer, defaultValue);

	return (
		<FavoritesContext.Provider value={favorites}>
			<FavoritesDispatchContext.Provider value={dispatch}>
				{children}
			</FavoritesDispatchContext.Provider>
		</FavoritesContext.Provider>
	);
};
