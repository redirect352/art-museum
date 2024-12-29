import React from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as MuseumLogo } from '#assets/museum-logo 2.svg';
import { ReactComponent as BookmarkIcon } from '#assets/bookmark.svg';
import { Link } from 'react-router';

const Header: FunctionComponent = () => {
	return (
		<header className={classes.header}>
			<nav className={classes.headerContent}>
				<Link to={'/'}>
					<MuseumLogo />
				</Link>
				<Link to="/favorites" className={classes.favorites}>
					<BookmarkIcon />
					<span>Your favorites</span>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
