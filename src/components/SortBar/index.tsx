import React, { useEffect } from 'react';
import classes from './styles.module.scss';
import { useForm } from 'react-hook-form';
import useDebounce from '#utils/hooks/useDebounce';
import { useSearchParam } from '#utils/hooks/useSeachParam';

type SortFields = 'is_on_view' | 'has_not_been_viewed_much';
type Inputs = {
	sort: SortFields;
	order: number;
};

const SortBar = () => {
	const { register, watch, resetField, setValue } = useForm<Inputs>({
		defaultValues: { order: 1 },
	});
	const sort = watch('sort');
	const order = watch('order');
	const sortDebounce = useDebounce(watch('sort'), 400);
	const orderDebounce = useDebounce(watch('order'), 400);
	const { setParam: setSortURL } = useSearchParam('sort');
	const { setParam: setOrderURL } = useSearchParam('order');
	useEffect(() => {
		setSortURL(sortDebounce, (params) => {
			if (!sortDebounce) params.delete('order');
			if (sortDebounce && params.get('order') === null)
				params.set('order', order === 1 ? 'asc' : 'desc');
			return params;
		});
	}, [sortDebounce]);
	useEffect(() => {
		setOrderURL(orderDebounce === 1 ? 'asc' : 'desc');
	}, [orderDebounce]);
	const uncheckField =
		(fieldName: keyof Inputs) =>
		(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
			if ((e.target as HTMLInputElement).value === watch(fieldName)) {
				resetField(fieldName);
			}
		};

	return (
		<div className={classes.container}>
			<span> Order by: </span>
			<label className={classes['radio-container']}>
				Is Public
				<input
					type="radio"
					{...register('sort')}
					value={'is_on_view'}
					onClick={uncheckField('sort')}
				/>
				<span className={classes.checkmark}></span>
			</label>
			<label className={classes['radio-container']}>
				Viewed much recently
				<input
					type="radio"
					{...register('sort')}
					value={'has_not_been_viewed_much'}
					onClick={uncheckField('sort')}
				/>
				<span className={classes.checkmark}></span>
			</label>
			{sort && (
				<>
					<label
						htmlFor="order"
						onClick={() => setValue('order', order >= 2 ? 1 : order + 1)}
						className={classes.orderInputLabel}
					>
						{order === 1 && 'asc'}
						{order === 2 && 'desc'}
					</label>
					<input
						className={classes.orderInput}
						id="order"
						defaultValue={0}
						{...register('order', { max: 2, min: 0 })}
						type="number"
					/>
				</>
			)}
		</div>
	);
};

export default SortBar;
