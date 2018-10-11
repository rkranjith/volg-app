import { UserListComponent } from 'users/user-list/user-list.component';
import { UserAddEditComponent } from 'users/add-edit/add-edit.component';

export const appRoutes = [
    {
        path        : '',
        redirectTo  : '/users',
        pathMatch   : 'full'
    },
    {   path        : 'users',
        component   : UserListComponent
    },
    {   path        : 'user/add',
        component   : UserAddEditComponent
    },
    {   path        : 'user/edit/:id',
        component   : UserAddEditComponent
    }
];
