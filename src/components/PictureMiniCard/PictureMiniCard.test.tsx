import React from 'react';
import { render, screen } from '@testing-library/react';
import PictureMiniCard from './index';

const mockData = {
	src: 'src-mock',
	title: 'mock-title',
	author: 'mock-author',
	isOnView: false,
	pictureId: 123,
};

jest.mock(
	'../Image',
	() =>
		function mockImage(props: { src: string }) {
			return <div data-testid={props.src} />;
		}
);
jest.mock(
	'../AddToFavoritesButton',
	() =>
		function mockFavs() {
			return <>add to favs</>;
		}
);
jest.mock(
	'../PictureDescription',
	() =>
		function mockPagination(props: { title: string; author: string }) {
			return (
				<div>
					<p>{props.title}</p> <p>{props.author}</p>
				</div>
			);
		}
);

afterEach(() => {
	jest.restoreAllMocks();
});
test('renders item with desription and image', async () => {
	render(<PictureMiniCard {...mockData} />);
	expect(screen.getByTestId(mockData.src)).toBeInTheDocument();
	expect(screen.getByText(mockData.author)).toBeInTheDocument();
	expect(screen.getByText(mockData.title)).toBeInTheDocument();
	expect(screen.getByText('add to favs')).toBeInTheDocument();
});
