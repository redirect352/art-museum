import React, { useCallback, useEffect } from 'react';
import PictureCard from '../PictureCard';
import classes from './styles.module.scss';
import Pagination from '#components/Pagination';
import useLoader, { LoadStates } from '../../utils/hooks/useLoader';
import Loader from '../Loader';
import { ApiResponseWithPagination } from '../../utils/types/ApiResponseWithPagination';
import { PictureItem } from '../../utils/types/PictureItem';
import useSearchParamValue from '../../utils/hooks/useSearchParam';

type GalleryItem = Pick<
	PictureItem,
	'id' | 'artist_title' | 'title' | 'image_id' | 'is_on_view'
>;

const PictureGallery = () => {
	const page = useSearchParamValue<number>('page');
	const search = useSearchParamValue<string>('s');
	const loadFunc = useCallback(
		() =>
			fetch(
				search
					? `https://api.artic.edu/api/v1/artworks/search?q=${search}&page=${page ?? 1}&limit=3&fields=id,title,image_id,is_on_view,artist_title`
					: `https://api.artic.edu/api/v1/artworks?page=${page ?? 1}&limit=3&fields=id,title,image_id,is_on_view,artist_title`
			),
		[page, search]
	);
	const { loadState, content, error } =
		useLoader<ApiResponseWithPagination<GalleryItem[]>>(loadFunc);
	useEffect(() => {
		if (error) throw error;
	}, [error]);
	return (
		<section className={classes.gallerySection}>
			<Loader active={loadState === LoadStates.loading} />
			<div className={classes.gallery}>
				{content?.data?.map(
					({ id, title, artist_title, is_on_view, image_id }) => (
						<PictureCard
							key={id}
							src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
							title={title}
							author={artist_title}
							isOnView={is_on_view}
						/>
					)
				)}
			</div>
			<div className={classes.pagination}>
				<Pagination
					totalCount={Math.min(3000, content?.pagination?.total ?? 1)}
				/>
			</div>
		</section>
	);
};

export default PictureGallery;
