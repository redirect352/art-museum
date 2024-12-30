import React, { DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';
import Loader from '../Loader';
import classes from './styles.module.scss';
import { ReactComponent as MuseumLogo } from '#assets/museum-logo-no-text.svg';

type ImageProps = DetailedHTMLProps<
	ImgHTMLAttributes<HTMLImageElement>,
	HTMLImageElement
> & {};

const Image = (props: ImageProps) => {
	const [status, setStatus] = useState('loading');
	return (
		<>
			<Loader active={status === 'loading'} />
			{status !== 'failed' && (
				<img
					{...props}
					onLoad={() => setStatus('loaded')}
					onError={() => setStatus('failed')}
				/>
			)}
			{status === 'failed' && (
				<div className={[props.className, classes.errorBox].join(' ')}>
					<MuseumLogo />
				</div>
			)}
		</>
	);
};

export default Image;
