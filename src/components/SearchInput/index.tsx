import React from 'react';
import classes from './styles.module.scss';
import { ReactComponent as SearchIcon } from '#assets/search.svg';

type SearchInputProps = React.ComponentProps<'div'>;

const SearchInput = ({ ...props }: SearchInputProps) => {
	return (
		<div className={classes.searchInput} {...props}>
			<input type="text" placeholder="Search art, artist, work..."></input>
			<i className={classes.icon}>
				<SearchIcon />
			</i>
		</div>
	);
};

export default SearchInput;
