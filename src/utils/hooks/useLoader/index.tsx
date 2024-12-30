import { useEffect, useState } from 'react';

export enum LoadStates {
	loading,
	succeed,
	errored,
}
export type ApiError = {
	status: number;
};
function useLoader<T>(loadFunction: () => Promise<Response>) {
	const [content, updateContent] = useState<T | undefined>(undefined);
	const [loadState, changeLoadState] = useState(LoadStates.loading);
	const [error, setError] = useState<ApiError | null>(null);

	const onContentLoaded = async (loadedCharacters: Response) => {
		const data = await loadedCharacters.json();
		updateContent(data as T);
		changeLoadState(LoadStates.succeed);
	};
	const onError = (error: ApiError) => {
		console.error(error);
		setError(error ?? 'Unknown error');
		changeLoadState(LoadStates.errored);
	};
	const reload = () => {
		changeLoadState(LoadStates.loading);
	};

	useEffect(() => {
		if (loadFunction) {
			loadFunction().then(onContentLoaded).catch(onError);
		}
	}, [loadFunction]);

	return { error, loadState, content, reload };
}

export default useLoader;
