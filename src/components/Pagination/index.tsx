import React, { useEffect, useState } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as NextSvg } from '#assets/next.svg';
import { usePagination } from '#utils/hooks/usePagination';
import { useSearchParams } from 'react-router';
import useDebounce from '#utils/hooks/useDebounce';

interface PaginationProps {
	totalCount: number;
}

const Pagination = ({ totalCount }: PaginationProps) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [activePage, setActivePage] = useState(() =>
		searchParams.has('page') ? +(searchParams.get('page') ?? 1) : 1
	);
	const pageDebounced = useDebounce(activePage, 500);
	const p = usePagination({
		totalCount,
		pageSize: 3,
		currentPage: activePage,
		siblingCount: 1,
	});
	useEffect(() => {
		if (searchParams.get('page') !== pageDebounced.toString()) {
			const newParams = new URLSearchParams(searchParams);
			newParams.set('page', pageDebounced.toString());
			setSearchParams(newParams);
		}
	}, [pageDebounced]);
	return (
		<div className={classes.pagination}>
			{p?.map((val, index) => (
				<div
					key={typeof val === 'string' ? val + index : val}
					data-active={val === activePage}
					className={classes.paginationItem}
					onClick={
						typeof val === 'number' ? () => setActivePage(val) : undefined
					}
				>
					<span>{val}</span>
				</div>
			))}
			{activePage < +(p?.at(-3) ?? 0) && (
				<div
					className={classes.paginationItem}
					onClick={() => setActivePage(activePage + 1)}
				>
					<NextSvg />
				</div>
			)}
		</div>
	);
};

export default Pagination;
