import React from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as MuseumLogo } from '#assets/museum-logo-black.svg';
import { ReactComponent as MosdenLogo } from '#assets/modsen.svg';

import { Link } from 'react-router';

const Footer: FunctionComponent = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footerContent}>
				<Link to={'/'}>
					<MuseumLogo />
				</Link>
				<a href="https://www.modsen.by/">
					<MosdenLogo />
				</a>
			</div>
		</footer>
	);
};
export default Footer;
