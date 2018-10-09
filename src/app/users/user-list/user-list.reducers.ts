import { PayloadAction } from '../../core/payload-action.types';

import { UserListAction } from './user-list.actions';
import { User, Users } from '../model';

const USERS_INITIAL_STATE: Users = {
    items: [],
    loading: false,
    complete: false,
    error: null
};

export function createUserListReducer() {
    return function userListReducer(
        state: Users = USERS_INITIAL_STATE,
        action: PayloadAction<User[], any>
    ): Users {
        switch (action.type) {
            case UserListAction.USERS_LOAD_STARTED:
                return {
                    items: [],
                    loading: true,
                    complete: false,
                    error: null
                };
            case UserListAction.USERS_LOAD_SUCCEEDED:
                return {
                    items: action.payload,
                    loading: false,
                    complete: true,
                    error: null
                };
            case UserListAction.USERS_LOAD_FAILED:
                return {
                    items: [],
                    loading: false,
                    complete: true,
                    error: action.error
                };
        }
        return state;
    };
}
