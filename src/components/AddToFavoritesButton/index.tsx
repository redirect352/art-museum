import React, { ComponentProps, useCallback, useContext } from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as BookmarkIcon } from '#assets/bookmark.svg';
import { FavoritesContext, FavoritesDispatchContext } from '#store';

type AddToFavoritesButtonProps = ComponentProps<'button'> & {
	pictureId: number;
};

const AddToFavoritesButton: FunctionComponent<AddToFavoritesButtonProps> = ({
	pictureId,
	...props
}) => {
	const favorites = useContext(FavoritesContext);
	const dispatch = useContext(FavoritesDispatchContext);
	const isFavorite = favorites.includes(pictureId);
	const buttonAction = useCallback(
		(type: 'add' | 'remove') => dispatch({ type: type, payload: pictureId }),
		[pictureId, dispatch]
	);
	return (
		<button
			{...props}
			className={[classes.favoritesButton, props.className].join(' ')}
			data-favorite={isFavorite}
			onClick={() => buttonAction(isFavorite ? 'remove' : 'add')}
		>
			<BookmarkIcon />
		</button>
	);
};

export default AddToFavoritesButton;
