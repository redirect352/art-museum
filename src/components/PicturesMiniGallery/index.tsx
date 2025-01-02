import React, { useEffect } from 'react';
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
interface PictureMiniGalleryProps {
	picturesLoadFunction: () => Promise<Response>;
}

const PictureMiniGallery = ({
	picturesLoadFunction,
}: PictureMiniGalleryProps) => {
	const { loadState, content, error } =
		useLoader<ApiResponseWithPagination<GalleryItem[]>>(picturesLoadFunction);
	useEffect(() => {
		if (error) throw error;
	}, [error]);
	return (
		<div className={classes['mini-gallery-container']}>
			<Loader active={loadState === LoadStates.loading} />
			<div className={classes['mini-gallery']}>
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
		</div>
	);
};

export default PictureMiniGallery;
