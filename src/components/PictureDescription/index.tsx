import React from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';

interface PictureDescriptionProps {
	title: string;
	author: string;
	isOnView: boolean;
}

const PictureDescription: FunctionComponent<PictureDescriptionProps> = ({
	title,
	author,
	isOnView,
}) => {
	return (
		<div className={classes.textInfo}>
			<div className={classes.artAndArtist}>
				<h5 className={classes.cardHeader}>{title}</h5>
				<span className={classes.artistLabel}>{author}</span>
			</div>
			<strong className={classes.publicLabel}>
				{isOnView ? 'Public' : 'Not in view'}
			</strong>
		</div>
	);
};

export default PictureDescription;
