import React from 'react';
import classes from './styles.module.scss';
import SearchInput from '#components/SearchInput';
import PictureGallery from '#components/PictureGallery';
import ErrorBoundary from '#components/ErrorBoundary';
import PictureRecommendations from '#components/PictureRecommendations';

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
			<ErrorBoundary>
				<PictureGallery />
			</ErrorBoundary>
			<span className={[classes.label, classes.coloredLabel].join(' ')}>
				Here some more
			</span>
			<h3 className={classes.subHeader}>Other works for you</h3>
			<div className={classes.pageBottom}>
				<ErrorBoundary>
					<PictureRecommendations />
				</ErrorBoundary>
			</div>
		</div>
	);
};

export default MainPage;
