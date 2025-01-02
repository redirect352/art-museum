import React from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import { Link } from 'react-router';

interface PictureDescriptionProps {
	title: string;
	author: string;
	isOnView: boolean;
	pictureLink: string;
}

const PictureDescription: FunctionComponent<PictureDescriptionProps> = ({
	title,
	author,
	isOnView,
	pictureLink,
}) => {
	return (
		<div className={classes.textInfo}>
			<div className={classes.artAndArtist}>
				<Link to={pictureLink}>
					<h5 className={classes.cardHeader}>{title}</h5>
				</Link>
				<span className={classes.artistLabel}>{author}</span>
			</div>
			<strong className={classes.publicLabel}>
				{isOnView ? 'Public' : 'Not in view'}
			</strong>
		</div>
	);
};

export default PictureDescription;
