import React, { useCallback, useEffect, useMemo } from 'react';
import classes from './styles.module.scss';
import useLoader, { LoadStates } from '../../utils/hooks/useLoader';
import Loader from '../Loader';
import { ApiResponseWithPagination } from '../../utils/types/ApiResponseWithPagination';
import { PictureItem } from '../../utils/types/PictureItem';
import PictureMiniCard from '../PictureMiniCard';

type GalleryItem = Pick<
	PictureItem,
	'id' | 'artist_title' | 'title' | 'image_id' | 'is_on_view'
>;

const PictureRecommendations = () => {
	const page = useMemo(() => 100 + Math.random() * 100, []);
	const loadFunc = useCallback(
		() =>
			fetch(
				`https://api.artic.edu/api/v1/artworks?page=${page}&limit=9&fields=id,title,image_id,is_on_view,artist_title`
			),
		[page]
	);
	const { loadState, content, error } =
		useLoader<ApiResponseWithPagination<GalleryItem[]>>(loadFunc);
	useEffect(() => {
		if (error) throw error;
	}, [error]);
	return (
		<section className={classes.recommendationSection}>
			<Loader active={loadState === LoadStates.loading} />
			<div className={classes.gallery}>
				{content?.data?.map(
					({ id, title, artist_title, is_on_view, image_id }) => (
						<PictureMiniCard
							key={id}
							pictureId={id}
							src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
							title={title}
							author={artist_title}
							isOnView={is_on_view}
						/>
					)
				)}
			</div>
		</section>
	);
};

export default PictureRecommendations;
