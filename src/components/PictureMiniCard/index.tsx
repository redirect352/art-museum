import React from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import Image from '../Image';
import AddToFavoritesButton from '../AddToFavoritesButton';
import PictureDescription from '../PictureDescription';

interface PictureMiniCardProps {
	src: string;
	title: string;
	author: string;
	isOnView: boolean;
}

const PictureMiniCard: FunctionComponent<PictureMiniCardProps> = ({
	src,
	title,
	author,
	isOnView,
}) => {
	return (
		<div className={classes.card}>
			<Image src={src} className={classes.cardImage} alt={title} />
			<div className={classes.cardInfo}>
				<div className={classes.cardInfoContainer}>
					<PictureDescription
						author={author}
						isOnView={isOnView}
						title={title}
					/>
				</div>
			</div>
			<AddToFavoritesButton />
		</div>
	);
};

export default PictureMiniCard;
