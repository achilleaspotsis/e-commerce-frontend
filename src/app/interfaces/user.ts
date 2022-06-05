import { Model } from './model';

export interface User extends Model {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

export type UserRole = 'admin' | 'user';
