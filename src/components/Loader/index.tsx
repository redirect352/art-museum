import React from 'react';
import classes from './styles.module.scss';

interface LoaderProps {
	active?: boolean;
}

const Loader = ({ active = false }: LoaderProps) => {
	if (active) {
		return (
			<div className={classes.loaderBox} data-testid="loader-element">
				<div className={classes.loader}></div>
			</div>
		);
	}
	return null;
};

export default Loader;
