import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as MuseumLogo } from '#assets/museum-logo 2.svg';
import { ReactComponent as BookmarkIcon } from '#assets/bookmark.svg';
import { ReactComponent as HomeIcon } from '#assets/home.svg';
import { ReactComponent as BurgerIcon } from '#assets/burger-menu.svg';
import { Link, useLocation } from 'react-router';
import { useOutsideClick } from '#utils/hooks/useClickOutside';

const Header: FunctionComponent = () => {
	const { pathname } = useLocation();
	console.log(pathname);

	const ref = useOutsideClick(() => setOpen(false));
	const [isOpened, setOpen] = useState(false);
	return (
		<header className={classes.header} ref={ref}>
			<nav className={classes.headerContent}>
				<Link to={'/'} className={classes.museumLogo}>
					<MuseumLogo />
				</Link>
				<div
					className={`${classes.navMenu} ${isOpened ? classes.active : ''}`}
					ref={isOpened ? ref : null}
				>
					{pathname !== '/' && (
						<Link to="/" className={classes.navItem}>
							<HomeIcon />
							<span>Home</span>
						</Link>
					)}

					<Link to="/favorites" className={classes.navItem}>
						<BookmarkIcon />
						<span>Your favorites</span>
					</Link>
				</div>
				{!isOpened && (
					<button
						className={classes.burgerButton}
						onClick={() => setOpen(!isOpened)}
					>
						<BurgerIcon />
					</button>
				)}
				{isOpened && (
					<div onClick={(e) => e.stopPropagation()} className={classes.blur} />
				)}
			</nav>
		</header>
	);
};

export default Header;
