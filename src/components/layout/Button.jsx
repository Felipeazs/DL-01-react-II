import React from 'react';

const Button = ({ title, align }) => {
	return (
		<button
			className={`text-primary self-${align} font-semibold mb-2 border border-transparent rounded w-20 mt-3 shadow-md hover:bg-secondary hover:text-primary active:bg-other focus:shadow-outline focus:outline-none focus:bg-secondary`}
		>
			{title}
		</button>
	);
};

export default Button;
