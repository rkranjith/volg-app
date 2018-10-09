import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension
    } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { AppModel } from './model';
import { rootReducer } from './reducer';
import { RootEpics } from './epics';

import { UserListAction } from '../users/user-list/user-list.actions';
import { UserListEpics } from '../users/user-list/user-list.epics';

@NgModule({
    imports: [
        NgReduxModule,
        NgReduxRouterModule
    ],
    providers: [
        RootEpics,
        UserListAction,
        UserListEpics
    ],
    exports: []
})

export class StoreModule {
    constructor(
        public store: NgRedux<AppModel>,
        devTools: DevToolsExtension,
        ngReduxRouter: NgReduxRouter,
        rootEpics: RootEpics,
    ) {
        // Tell Redux about our reducers and epics. If the Redux DevTools
        // chrome extension is available in the browser, tell Redux about
        // it too.
        store.configureStore(
            rootReducer,
            {},
            [
                createLogger(),
                ...rootEpics.createEpics()
            ],
            devTools.isEnabled() ? [
                devTools.enhancer()
            ] : []);

        // Enable syncing of Angular router state with our Redux store.
        ngReduxRouter.initialize();
        console.log('Store initialized');
        // Enable syncing of Angular form state with our Redux store.
        provideReduxForms(store);
    }
}
