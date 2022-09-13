import React from 'react';

import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar logo='GuitarCenter' />
			<div className='p-2 bg-other h-screen'>{children}</div>
		</>
	);
};

export default Layout;
