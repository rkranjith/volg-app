import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { AppModel } from '../../store/model';
import { Users, User } from '../model';
import { UserListAction } from './user-list.actions';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    private subscribers: Subscription;
    public userList: User[];

    @select(['users'])
    readonly users$: Observable<Users>;

    constructor(
        private cdr: ChangeDetectorRef,
        private ngRedux: NgRedux<AppModel>,
        private actions: UserListAction
    ) {
        this.initUsers();
    }

    ngOnInit() {
        this.ngRedux.dispatch(this.actions.loadStarted());
    }

    initUsers() {
        this.subscribers = this.users$.subscribe(res => {
            const items = res.items;
            console.log(items);
            if (items.length <= 0) {
                return;
            }
            this.userList = items;
        });
    }
}
