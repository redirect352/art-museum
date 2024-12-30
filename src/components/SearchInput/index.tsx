import React, { useEffect } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as SearchIcon } from '#assets/search.svg';
import { useForm } from 'react-hook-form';
import useDebounce from '#utils/hooks/useDebounce';
import { useSearchParams } from 'react-router';

type SearchInputProps = React.ComponentProps<'div'>;
type Inputs = {
	searchValue: string;
};

const SearchInput = ({ ...props }: SearchInputProps) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const { register, watch } = useForm<Inputs>();
	const searchDebounce = useDebounce(watch('searchValue'), 700);
	useEffect(() => {
		const sFromParams = searchParams.get('s');
		if (!sFromParams && !searchDebounce) return;
		if (sFromParams !== searchDebounce) {
			const newParams = new URLSearchParams(searchParams);
			if (searchDebounce !== '') newParams.set('s', searchDebounce);
			else newParams.delete('s');
			newParams.set('page', '1');
			setSearchParams(newParams);
		}
	}, [searchDebounce]);
	return (
		<div className={classes.searchInput} {...props}>
			<input
				defaultValue=""
				placeholder="Search art, artist, work..."
				{...register('searchValue')}
			/>
			<i className={classes.icon}>
				<SearchIcon />
			</i>
		</div>
	);
};

export default SearchInput;
