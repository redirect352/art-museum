import React from 'react';
import classes from './styles.module.scss';
import SearchInput from '#components/SearchInput';
import PictureGallery from '#components/PictureGallery';

const MainPage = () => {
	return (
		<div className={classes.mainPageContainer}>
			<h1 className={classes.heading}>
				Let&apos;s Find Some <span>Art</span> Here!
			</h1>
			<SearchInput />
			<span className={[classes.label, classes.coloredLabel].join(' ')}>
				Topics for you
			</span>
			<h3 className={classes.subHeader}>Our special gallery</h3>
			<PictureGallery />
		</div>
	);
};

export default MainPage;
