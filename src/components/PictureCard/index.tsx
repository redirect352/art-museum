import React from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import Image from '../Image';
import PictureDescription from '../PictureDescription';
import AddToFavoritesButton from '../AddToFavoritesButton';

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
					<PictureDescription
						author={author}
						isOnView={isOnView}
						title={title}
					/>
					<AddToFavoritesButton />
				</div>
			</div>
		</section>
	);
};

export default PictureCard;
