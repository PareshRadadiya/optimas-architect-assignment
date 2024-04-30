import * as React from 'react';
import { useState } from 'react';
import './App.scss';
import SignInPage from 'pages/signin/SignInPage';
import Layout from 'layout/Layout';
import Dashboard from 'pages/dashboard/Dashboard';

function App() {
	const [login, setLogin] = useState<boolean>(false);

	return (
		<main className="main-container">
			{!login && <SignInPage onLogin={setLogin} />}
			{login && (
				<Layout>
					<Dashboard />
				</Layout>
			)}
		</main>
	);
}

export default App;
