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
	pictureId: number;
}

const PictureMiniCard: FunctionComponent<PictureMiniCardProps> = ({
	src,
	title,
	author,
	isOnView,
	pictureId,
}) => {
	const pictureLink = `/picture/${pictureId}`;
	return (
		<div className={classes.card}>
			<Image
				src={src}
				className={classes.cardImage}
				alt={title}
				href={pictureLink}
			/>
			<div className={classes.cardInfo}>
				<div className={classes.cardInfoContainer}>
					<PictureDescription
						author={author}
						isOnView={isOnView}
						title={title}
						pictureLink={pictureLink}
					/>
				</div>
			</div>
			<AddToFavoritesButton pictureId={pictureId} />
		</div>
	);
};

export default PictureMiniCard;
