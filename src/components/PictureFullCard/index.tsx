import React, { FunctionComponent, useCallback, useEffect } from 'react';
import classes from './styles.module.scss';
import useLoader, { LoadStates } from '#utils/hooks/useLoader';
import { ApiResponseWithPagination } from '#utils/types/ApiResponseWithPagination';
import { PictureItem } from '#utils/types/PictureItem';
import Loader from '../../components/Loader';
import Image from '../Image';
import AddToFavoritesButton from '../AddToFavoritesButton';
import PictureOverview from '../PictureOverview';
type PictureDetailed = Pick<
	PictureItem,
	| 'id'
	| 'artist_title'
	| 'title'
	| 'image_id'
	| 'is_on_view'
	| 'artist_display'
	| 'credit_line'
	| 'catalogue_display'
	| 'date_display'
	| 'dimensions'
>;

interface PictureFullCardProps {
	id: number;
}

const PictureFullCard: FunctionComponent<PictureFullCardProps> = ({ id }) => {
	const loadFunc = useCallback(
		() => fetch(`https://api.artic.edu/api/v1/artworks/${id}`),
		[id]
	);
	const { loadState, content, error } =
		useLoader<ApiResponseWithPagination<PictureDetailed>>(loadFunc);
	useEffect(() => {
		if (loadState === LoadStates.errored) {
			throw error ?? { message: 'Unknown picture load error' };
		}
	}, [error, loadState]);
	return (
		<section className={classes.fullCard}>
			<Loader active={loadState === LoadStates.loading} />
			{content && (
				<>
					<div className={classes.imageBox}>
						<Image
							src={`https://www.artic.edu/iiif/2/${content.data.image_id}/full/843,/0/default.jpg`}
							className={classes.image}
						/>
						<AddToFavoritesButton className={classes.pictureButton} />
					</div>
					<div className={classes.rightBlock}>
						<div className={classes.headerBlock}>
							<h1 className={classes.pictureTitle}>{content.data.title}</h1>
							<h3 className={classes.authorTitle}>
								{content.data.artist_title}
							</h3>
							<strong className={classes.yearsDisplay}>
								{content.data.date_display}
							</strong>
						</div>
						<PictureOverview
							artist_display={content.data.artist_display}
							dimensions={content.data.dimensions}
							credit_line={content.data.credit_line}
							catalogue_display={content.data.catalogue_display}
							is_on_view={content.data.is_on_view}
						/>
					</div>
				</>
			)}
		</section>
	);
};

export default PictureFullCard;
