import React from 'react';
import Loader from './index';
import { render } from '@testing-library/react';

test('renders loader', () => {
	const { getByTestId } = render(<Loader active={true} />);
	expect(getByTestId('loader-element')).toBeInTheDocument();
});
test('renders no loader', () => {
	const res = render(<Loader active={false} />);
	expect(res.queryByTestId('loader-element')).not.toBeInTheDocument();
});
test('renders no loader with default props', () => {
	const res = render(<Loader />);
	expect(res.queryByTestId('loader-element')).not.toBeInTheDocument();
});
