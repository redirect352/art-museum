import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from '#components/Header';
import Footer from '#components/Footer';
import MainPage from './pages/MainPage';

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
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
