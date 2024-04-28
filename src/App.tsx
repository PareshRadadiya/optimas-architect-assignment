import { useState } from 'react';
import './App.scss';
import SignInPage from 'pages/signin/SignInPage';
import Layout from 'layout/Layout';

function App() {
	const [login, setLogin] = useState<boolean>(false);

	return (
		<main className="main-container">
			{!login && <SignInPage onLogin={setLogin} />}
			{login && <Layout>dasboard</Layout>}
		</main>
	);
}

export default App;
