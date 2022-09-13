import React from 'react';

const Input = ({ id, value, type, label, onChange }) => {
	if (type === 'textarea') {
		return (
			<>
				<label
					htmlFor={id}
					className='text-left text-primary font-semibold mb-2'
				>
					{label}
				</label>
				<textarea
					id={id}
					value={value}
					onChange={onChange}
					className='px-4 py-2 leading-tight border border-transparent rounded shadow-md focus focus:placeholder-gray-500 focus:shadow-outline focus:outline-none'
				/>
			</>
		);
	}

	return (
		<>
			<label
				htmlFor={id}
				className='text-left text-primary font-semibold mb-2'
			>
				{label}
			</label>
			<input
				id={id}
				value={value}
				type={type}
				className='px-4 py-2 leading-tight border border-transparent shadow-md rounded focus:shadow-outline focus:outline-none'
				onChange={onChange}
			/>
		</>
	);
};

export default Input;
