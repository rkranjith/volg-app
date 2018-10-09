import { UserListComponent } from './users/user-list/user-list.component';

export const appRoutes = [
    {
        path        : '',
        redirectTo  : '/users',
        pathMatch   : 'full'
    },
    {   path        : 'users',
        component   : UserListComponent
    }
];
