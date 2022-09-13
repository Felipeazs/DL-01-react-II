import React from 'react';

const Card = ({ children }) => {
	return (
		<div className='shadow-md bg-secondary flex flex-col text-center gap-8 md:w-6/12 mx-auto mt-16'>
			<div className='container'>{children}</div>
		</div>
	);
};

export default Card;
