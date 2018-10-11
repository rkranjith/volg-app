import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

import { UserListEpics } from 'users/user-list/user-list.epics';

@Injectable()
export class RootEpics {
    constructor(
        private userListEpics: UserListEpics
    ) { }

    public createEpics() {
        return [
            this.userListEpics.createEpic(),
        ];
    }
}
