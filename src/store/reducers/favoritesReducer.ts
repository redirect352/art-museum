import add from '#store/actions/add';
import remove from '#store/actions/remove';
import { favoritesAction } from '..';

export default function favoritesReducer(
	favorites: number[],
	action: favoritesAction
) {
	const { type, payload } = action;
	switch (type) {
		case 'add':
			return add(favorites, payload);
		case 'remove':
			return remove(favorites, payload);
		default: {
			throw Error('Unknown action: ' + action);
		}
	}
}
