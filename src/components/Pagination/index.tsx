import React, { useDeferredValue, useEffect, useState } from 'react';
import classes from './styles.module.scss';
import { ReactComponent as NextSvg } from '#assets/next.svg';
import { usePagination } from '#utils/hooks/usePagination';
import { useSearchParams } from 'react-router';

interface PaginationProps {
	totalCount: number;
}

const Pagination = ({ totalCount }: PaginationProps) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [activePage, setActivePage] = useState(() =>
		searchParams.has('page') ? +(searchParams.get('page') ?? 1) : 1
	);
	const page = useDeferredValue(activePage);
	const p = usePagination({
		totalCount,
		pageSize: 3,
		currentPage: activePage,
		siblingCount: 1,
	});
	useEffect(() => {
		if (searchParams.get('page') !== page.toString()) {
			const newParams = new URLSearchParams(searchParams);
			newParams.set('page', page.toString());
			setSearchParams(newParams);
		}
	}, [page]);
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
					{val}
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
