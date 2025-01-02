import React from 'react';
import { useParams } from 'react-router';
import PictureFullCard from '../../components/PictureFullCard';
import ErrorBoundary from '#components/ErrorBoundary';

const PicturePage = () => {
	const { id } = useParams();
	return (
		<ErrorBoundary>
			<PictureFullCard id={+(id ?? 0)} />
		</ErrorBoundary>
	);
};

export default PicturePage;
