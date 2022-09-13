import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from '../components/layout/Input';
import Button from '../components/layout/Button';
import Card from '../components/layout/Card';

const Contacto = () => {
	const [userInput, setUserInput] = useState({
		nombre: '',
		email: '',
		descripcion: '',
	});

	const { nombre, email, descripcion } = userInput;

	const handleInputChange = (event) => {
		setUserInput({
			...userInput,
			[event.target.id]: event.target.value,
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		if (
			nombre.trim().length === 0 ||
			email.trim().length === 0 ||
			descripcion.trim().length === 0
		) {
			toast.error('Ingrese todos los datos');
			return;
		}

		setUserInput({ nombre: '', email: '', descripcion: '' });

		toast.success('Mensaje enviado!!', { icon: '🎸' });
	};
	return (
		<Card>
			<h1 className='text-5xl text-primary font-bold'>Necesitas ayuda?</h1>
			<form
				className='flex flex-col w-3/5 md:w-4/5 mx-auto'
				onSubmit={submitHandler}
			>
				<Input
					type='text'
					id='nombre'
					label='Nombre'
					value={nombre}
					onChange={handleInputChange}
				/>
				<Input
					type='text'
					id='email'
					label='Email'
					value={email}
					onChange={handleInputChange}
				/>
				<Input
					type='textarea'
					id='descripcion'
					label='Descripción'
					value={descripcion}
					onChange={handleInputChange}
				/>
				<Button
					title='Enviar'
					align='end'
				/>
			</form>
			<ToastContainer
				autoClose={1000}
				limit={2}
			/>
		</Card>
	);
};

export default Contacto;
