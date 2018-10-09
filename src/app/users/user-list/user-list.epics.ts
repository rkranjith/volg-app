import { Injectable } from '@angular/core';
import { createEpicMiddleware } from 'redux-observable';

import { UsersService } from '../../core/services/users.service';
import { UserListAction } from './user-list.actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserListEpics {

    public epics;

    constructor(
        private service: UsersService,
        private actions: UserListAction,
    ) { }

    public createEpic() {
        return createEpicMiddleware(
            this.createLoadUsersEpics()
        );
    }

    private createLoadUsersEpics() {
        return $action => $action
            .ofType(UserListAction.USERS_LOAD_STARTED)
            .switchMap(a => {
                return this.service.getUsers()
                    .map(data => {
                        console.log(data);
                        return this.actions.loadSucceeded(data['names']);
                    });
            });
    }
}
