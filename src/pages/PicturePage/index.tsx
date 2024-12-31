import React from 'react';
import { useParams } from 'react-router';
import PictureFullCard from '../../components/PictureFullCard';

const PicturePage = () => {
	const { id } = useParams();
	return (
		<div>
			<PictureFullCard id={+(id ?? 0)} />
		</div>
	);
};

export default PicturePage;
