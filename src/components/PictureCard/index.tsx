import React from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as BookmarkIcon } from '#assets/bookmark.svg';

interface PictureCardProps {
	src: string;
}

const PictureCard: FunctionComponent<PictureCardProps> = ({ src }) => {
	return (
		<section className={classes.card}>
			<img src={src} className={classes.cardImage} />
			<div className={classes.cardInfo}>
				<div className={classes.cardInfoContainer}>
					<div className={classes.textInfo}>
						<div className={classes.artAndArtist}>
							<h5 className={classes.cardHeader}>Charles V, bust length...</h5>
							<span className={classes.artistLabel}>Giovanni Britto</span>
						</div>
						<strong className={classes.publicLabel}>Public</strong>
					</div>
					<button className={classes.favoritesButton}>
						<BookmarkIcon />
					</button>
				</div>
			</div>
		</section>
	);
};

export default PictureCard;
