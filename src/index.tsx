import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from '#components/Header';
import Footer from '#components/Footer';
import MainPage from '#pages/MainPage';
import PicturePage from '#pages/PicturePage';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route index element={<MainPage />} />
					<Route path="/picture/:id" element={<PicturePage />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
