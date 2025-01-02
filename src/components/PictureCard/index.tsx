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
	pictureId: number;
}

const PictureCard: FunctionComponent<PictureCardProps> = ({
	src,
	title,
	author,
	isOnView,
	pictureId,
}) => {
	const pictureLink = `/picture/${pictureId}`;
	return (
		<section className={classes.card}>
			{/* <Link to={pictureLink}> */}
			<Image
				src={src}
				className={classes.cardImage}
				alt={title}
				href={pictureLink}
			/>
			{/* </Link> */}
			<div className={classes.cardInfo}>
				<div className={classes.cardInfoContainer}>
					<PictureDescription
						author={author}
						isOnView={isOnView}
						title={title}
						pictureLink={pictureLink}
					/>
					<AddToFavoritesButton />
				</div>
			</div>
		</section>
	);
};

export default PictureCard;
