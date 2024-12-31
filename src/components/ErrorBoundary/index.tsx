import { ApiError } from '#utils/hooks/useLoader/index.js';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	apiError: ApiError | null;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
		apiError: null,
	};

	public static getDerivedStateFromError(err: ApiError | null): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, apiError: err as ApiError };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			if (this.props.fallback) return this.props.fallback;
			if (this.state.apiError) {
				return (
					<h2>
						{this.state.apiError.status} {this.state.apiError.error}
					</h2>
				);
			} else {
				return <h2>Sorry.. there was an error </h2>;
			}
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
