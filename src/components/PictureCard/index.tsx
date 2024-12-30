import React from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as BookmarkIcon } from '#assets/bookmark.svg';
import Image from '../Image';

interface PictureCardProps {
	src: string;
	title: string;
	author: string;
	isOnView: boolean;
}

const PictureCard: FunctionComponent<PictureCardProps> = ({
	src,
	title,
	author,
	isOnView,
}) => {
	return (
		<section className={classes.card}>
			<Image src={src} className={classes.cardImage} alt={title} />
			<div className={classes.cardInfo}>
				<div className={classes.cardInfoContainer}>
					<div className={classes.textInfo}>
						<div className={classes.artAndArtist}>
							<h5 className={classes.cardHeader}>{title}</h5>
							<span className={classes.artistLabel}>{author}</span>
						</div>
						<strong className={classes.publicLabel}>
							{isOnView ? 'Public' : 'Not in view'}
						</strong>
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
