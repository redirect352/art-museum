import React, { ComponentProps, FunctionComponent } from 'react';
import classes from './styles.module.scss';
import { PictureItem } from '#utils/types/PictureItem.js';

interface OverviewBlockProps
	extends ComponentProps<'div'>,
		Partial<
			Pick<
				PictureItem,
				| 'artist_display'
				| 'dimensions'
				| 'catalogue_display'
				| 'is_on_view'
				| 'credit_line'
			>
		> {}
const PictureOverview: FunctionComponent<OverviewBlockProps> = ({
	artist_display = '',
	dimensions,
	catalogue_display,
	credit_line,
	is_on_view = false,
	...props
}) => {
	const artistNationality = artist_display.slice(
		artist_display.indexOf('\n'),
		artist_display.indexOf(',')
	);
	const catalogueShow = catalogue_display
		? catalogue_display
				.replaceAll('<p>', '')
				.replace(/<\/p>$/, '')
				.replaceAll(/<\/p>/g, ', ')
		: 'no data';
	return (
		<div
			{...props}
			className={[classes.overviewBlock, props.className].join(' ')}
		>
			<h2 className={classes.title}>Overview</h2>
			<div className={classes.overviewContent}>
				<div className={classes.item}>
					<span>Artist nationality:</span>{' '}
					{artistNationality ? artistNationality : 'no data'}
				</div>
				<div className={classes.item}>
					<span>Dimensions: Sheet:</span> {dimensions ?? 'no data'}
				</div>
				<div className={classes.item}>
					<span>Credit Line:</span> {credit_line ?? 'no data'}
				</div>
				<div className={classes.item}>
					<span>Repository:</span> {catalogueShow}
				</div>
				<div className={classes.item}>
					{is_on_view ? 'Public' : 'Not in view'}
				</div>
			</div>
		</div>
	);
};

export default PictureOverview;
