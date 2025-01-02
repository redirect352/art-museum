import React, { useContext } from 'react';
import { useCallback } from 'react';
import PictureMiniGallery from '../PicturesMiniGallery';
import { FavoritesContext } from '#store';
import classes from './style.module.scss';

const PictureFavoritesGallery = () => {
	const favorites = useContext(FavoritesContext);
	const loadFunc = useCallback(
		() =>
			fetch(
				`https://api.artic.edu/api/v1/artworks?ids=${favorites.join(',')}&fields=id,title,image_id,is_on_view,artist_title`
			),
		[favorites]
	);
	if (favorites.length === 0)
		return (
			<h2 className={classes['empty-list-heading']}>
				Your favorites list is empty... <br />{' '}
				<span className={classes.orange}>Add something!</span>
			</h2>
		);
	return <PictureMiniGallery picturesLoadFunction={loadFunc} />;
};

export default PictureFavoritesGallery;
