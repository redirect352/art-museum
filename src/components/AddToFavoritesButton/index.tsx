import React, { ComponentProps } from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as BookmarkIcon } from '#assets/bookmark.svg';

type AddToFavoritesButtonProps = ComponentProps<'button'>;

const AddToFavoritesButton: FunctionComponent<AddToFavoritesButtonProps> = (
	props
) => {
	return (
		<button className={classes.favoritesButton} {...props}>
			<BookmarkIcon />
		</button>
	);
};

export default AddToFavoritesButton;
