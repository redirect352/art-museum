export default function add(favorites: number[], payload: number) {
	const newFavorites = favorites.filter((id) => id !== payload);
	if (favorites.includes(payload)) {
		sessionStorage.setItem('favorites', JSON.stringify(newFavorites));
	}
	return newFavorites;
}
