import { useCallback } from 'react';
import { useSearchParams } from 'react-router';

export function useSearchParam(paramName: string) {
	const [searchParams, setSearchParams] = useSearchParams();
	const setParam = useCallback(
		(
			newValue: string,
			sideEffect?: (param: URLSearchParams) => URLSearchParams
		) => {
			const oldValue = searchParams.get(paramName);
			if (!oldValue && !newValue) return;
			if (oldValue !== newValue) {
				let newParams = new URLSearchParams(searchParams);
				if (newValue) newParams.set(paramName, newValue);
				else newParams.delete(paramName);
				if (sideEffect) newParams = sideEffect(newParams);
				setSearchParams(newParams);
			}
		},
		[paramName, searchParams]
	);
	return {
		value: searchParams.get(paramName),
		setParam,
	};
}
