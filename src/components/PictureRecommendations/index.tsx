import React from 'react';
import { useCallback, useMemo } from 'react';
import PictureMiniGallery from '../PicturesMiniGallery';

const PictureRecommendations = () => {
	const page = useMemo(() => 100 + Math.floor(Math.random() * 100), []);
	const loadFunc = useCallback(
		() =>
			fetch(
				`https://api.artic.edu/api/v1/artworks?page=${page}&limit=9&fields=id,title,image_id,is_on_view,artist_title`
			),
		[page]
	);

	return <PictureMiniGallery picturesLoadFunction={loadFunc} />;
};

export default PictureRecommendations;
