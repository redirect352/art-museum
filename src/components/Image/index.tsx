import React, { DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react';
import Loader from '../Loader';
import classes from './styles.module.scss';
import { ReactComponent as MuseumLogo } from '#assets/museum-logo-no-text.svg';
import { Link } from 'react-router';

type ImageProps = DetailedHTMLProps<
	ImgHTMLAttributes<HTMLImageElement>,
	HTMLImageElement
> & {
	href?: string;
};

const Image = ({ href, ...props }: ImageProps) => {
	const [status, setStatus] = useState('loading');
	const Wrapper = ({ children }: React.PropsWithChildren<object>) =>
		href ? <Link to={href}>{children}</Link> : children;
	const imageClasses = [href ? classes.scalingImage : '', props.className];
	return (
		<Wrapper>
			<>
				<Loader active={status === 'loading'} />
				{status !== 'failed' && (
					<img
						{...props}
						className={imageClasses.join(' ')}
						onLoad={() => setStatus('loaded')}
						onError={() => setStatus('failed')}
					/>
				)}
				{status === 'failed' && (
					<div className={[classes.errorBox, ...imageClasses].join(' ')}>
						<MuseumLogo />
					</div>
				)}
			</>
		</Wrapper>
	);
};

export default Image;
