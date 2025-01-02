export default function (favorites: number[], payload: number) {
	const newFavorites = [...favorites];
	if (!newFavorites.includes(payload)) {
		newFavorites.push(payload);
		sessionStorage.setItem('favorites', JSON.stringify(newFavorites));
	}
	return newFavorites;
}
