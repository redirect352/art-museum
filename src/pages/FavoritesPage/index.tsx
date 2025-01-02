import React from 'react';
import classes from './styles.module.scss';
import { ReactComponent as FavoritesIcon } from '#assets/favorites-big.svg';
import PictureFavoritesGallery from '#components/PictureFavoritesGallery';
import ErrorBoundary from '#components/ErrorBoundary';

const FavoritesPage = () => {
	return (
		<div className={classes.pageContainer}>
			<h1>
				Here are your
				<br />
				<FavoritesIcon /> <span>Favorites</span>
			</h1>
			<section className={classes['favorites-section']}>
				<div className={classes['section-heading']}>
					<span>Saved by you</span>
					<h3>Your favorites list</h3>
				</div>
				<ErrorBoundary>
					<PictureFavoritesGallery />
				</ErrorBoundary>
			</section>
		</div>
	);
};

export default FavoritesPage;
