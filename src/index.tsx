import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from '#components/Header';
import Footer from '#components/Footer';
import MainPage from '#pages/MainPage';
import PicturePage from '#pages/PicturePage';
import { FavoriteStoreContextProvider } from './store';
import FavoritesPage from '#pages/FavoritesPage';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<FavoriteStoreContextProvider>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route index element={<MainPage />} />
						<Route path="/picture/:id" element={<PicturePage />} />
						<Route path="/favorites" element={<FavoritesPage />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</FavoriteStoreContextProvider>
	</React.StrictMode>
);
