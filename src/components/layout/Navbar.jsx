import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
	return (
		<>
			<nav className='flex flex-row h-12 justify-between items-center px-6 bg-primary text-primary shadow-md'>
				<div className='flex flex-row gap-5 font-semibold'>
					<Link to='/'>
						<p>🏠 Home</p>
					</Link>
					<Link to='/contacto'>
						<p>📗 Contacto</p>
					</Link>
				</div>
				<Link to='/'>
					<p className='text-2xl font-bold'>{logo} 🎸</p>
				</Link>
			</nav>
		</>
	);
};

export default Navbar;
