import React from 'react';
import { render, screen } from '@testing-library/react';
import PictureGallery from './index';
import { MemoryRouter } from 'react-router';

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
	'../PictureCard',
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
	jest.spyOn(window, 'fetch').mockImplementation(
		jest.fn().mockImplementation(() =>
			Promise.resolve({
				status: 200,
				json: () => Promise.resolve(mockData),
			})
		)
	);
	render(
		<MemoryRouter initialEntries={['/']}>
			<PictureGallery />
		</MemoryRouter>
	);
	const card = await screen.findByTestId(id.toString());
	expect(card).toBeInTheDocument();
});

test('renders empty gallery', async () => {
	jest.spyOn(window, 'fetch').mockImplementation(
		jest.fn().mockImplementation(() =>
			Promise.resolve({
				status: 200,
				json: () => Promise.resolve({ pagination: { total: 0 }, data: [] }),
			})
		)
	);
	render(
		<MemoryRouter initialEntries={['/']}>
			<PictureGallery />
		</MemoryRouter>
	);
	const noContentHeader = await screen.findByText(
		'Sorry. Nothing found for your request. Try to find something different'
	);
	expect(noContentHeader).toBeInTheDocument();
});
