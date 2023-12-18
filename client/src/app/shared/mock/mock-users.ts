import { User } from '../models/users.model';

export const mockUsers: User[] = [
	{
		email: 'armando@corre.com',
		password: 'Contraseña',
	},
	{
		email: 'armando@corre.com',
		password: 'Contraseña',
		image: 'default.jpg',
		name: 'ArandanoSad',
	},
];

export const mockUser: User = {
	email: 'armando@corre.com',
	password: 'Contraseña',
};
