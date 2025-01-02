import React, { useEffect } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as SearchIcon } from '#assets/search.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import useDebounce from '#utils/hooks/useDebounce';
import { useSearchParams } from 'react-router';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SearchInputProps = React.ComponentProps<'form'>;
type Inputs = {
	searchValue?: string;
};
const searchSchema = object({
	searchValue: string().test(
		'non-en',
		'Search must contain only english chars, digits or spaces',
		(value) => value?.match(/[\w\d\s]*/)?.[0].length === value?.length
	),
});

const SearchInput = ({ ...props }: SearchInputProps) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		defaultValues: { searchValue: searchParams.get('s') ?? undefined },
		resolver: yupResolver(searchSchema),
	});
	const searchDebounce = useDebounce(watch('searchValue'), 700);
	function setSearchParam(newQuery: string) {
		const oldQuery = searchParams.get('s');
		if (!oldQuery && !newQuery) return;
		if (oldQuery !== newQuery) {
			const newParams = new URLSearchParams(searchParams);
			if (newQuery !== '') newParams.set('s', newQuery);
			else newParams.delete('s');
			newParams.set('page', '1');
			setSearchParams(newParams);
		}
	}
	useEffect(() => {
		if (!searchSchema.isValidSync({ searchValue: searchDebounce })) {
			return;
		}
		setSearchParam(searchDebounce ?? '');
	}, [searchDebounce]);
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const res = await searchSchema.isValid(data.searchValue);
		if (res) {
			setSearchParam(data.searchValue ?? '');
		}
	};

	return (
		<>
			<form
				{...props}
				className={classes.searchInput}
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					placeholder="Search art, artist, work..."
					{...register('searchValue')}
					aria-invalid={errors.searchValue ? 'true' : 'false'}
				/>

				<button className={classes.icon} type="submit">
					<SearchIcon />
				</button>
			</form>
			<p className={classes.error}>{errors.searchValue?.message}</p>
		</>
	);
};

export default SearchInput;
