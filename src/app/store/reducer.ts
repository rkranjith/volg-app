import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';


import { createUserListReducer } from 'users/user-list/user-list.reducers';

// Define the global store shape by combining our application's
// reducers together into a given structure.

export const appReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        router: routerReducer,
        users: createUserListReducer()
    })
);

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};
