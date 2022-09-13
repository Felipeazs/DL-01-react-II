import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Layout from './components/layout/Layout';

import NotFound from './pages/NotFound';

function App() {
	return (
		<Router>
			<Layout className='App'>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/contacto'
						element={<Contacto />}
					/>

					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
