import React from 'react';
import { render, screen } from '@testing-library/react';
import PictureMiniGallery from '.';

const id = Math.floor(Math.random() * 10000);
const mockData = {
	data: [
		{
			id,
			artist_title: 'A1',
			title: 'Pic1',
			image_id: 'empty',
			is_on_view: true,
		},
	],
	pagination: { total: 123 },
};

jest.mock(
	'../PictureMiniCard',
	() =>
		function mockCard(props: { pictureId: number }) {
			return <div data-testid={props?.pictureId} />;
		}
);
jest.mock(
	'#components/Pagination',
	() =>
		function mockPagination() {
			return <>Pagination</>;
		}
);

afterEach(() => {
	jest.restoreAllMocks();
});
test('renders gallery with mock item', async () => {
	const mockFetch = jest.fn().mockImplementation(() =>
		Promise.resolve({
			status: 200,
			json: () => Promise.resolve(mockData),
		})
	);
	render(<PictureMiniGallery picturesLoadFunction={() => mockFetch()} />);
	const card = await screen.findByTestId(id.toString());
	expect(card).toBeInTheDocument();
});
