import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class UserListAction {
    static readonly USERS_LOAD = 'USERS_LOAD';
    static readonly USERS_LOAD_STARTED = 'USERS_LOAD_STARTED';
    static readonly USERS_LOAD_SUCCEEDED = 'USERS_LOAD_SUCCEEDED';
    static readonly USERS_LOAD_FAILED = 'USERS_LOAD_FAILED';

    @dispatch()
    loadUsers() {
        return {
            type: UserListAction.USERS_LOAD,
            payload: null,
        };
    }

    loadStarted() {
        return {
            type: UserListAction.USERS_LOAD_STARTED,
            payload: null,
        };
    }

    loadSucceeded(payload) {
        return {
            type: UserListAction.USERS_LOAD_SUCCEEDED,
            payload,
        };
    }

    loadFailed(error) {
        return {
            type: UserListAction.USERS_LOAD_FAILED,
            payload: null,
            error,
        };
    }
}
