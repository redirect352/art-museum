import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from '#components/Header';
import Footer from '#components/Footer';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route index element={<div>Page is still empty</div>} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
