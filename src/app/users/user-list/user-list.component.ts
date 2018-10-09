import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
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
export class UserListComponent implements OnInit, OnDestroy {

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
        this.ngRedux.dispatch(this.actions.loadUsers());
    }

    ngOnDestroy() {
        this.cdr.detach();
        this.subscribers.unsubscribe();
    }

    initUsers() {
        this.subscribers = this.users$.subscribe(res => {
            const items = res.items;

            if (items.length > 0) {
                this.userList = items;
            } else if (res.complete === false && res.loading !== true) {
                this.getUsers();
            }
        });
    }

    public getUsers(): void {
        this.ngRedux.dispatch(this.actions.loadStarted());
    }

    public confirmDelete(user, i) {
        const msg =
            `Are you sure you want to delete "${user.surname}, ${user.name}" ?`;
        const res = confirm(msg);
        if (res) {
            this.deleteUser(i);
        }
    }

    public deleteUser(i) {
        this.userList.splice(i, 1);
        alert('User deleted!');
        this.cdr.detectChanges();
    }
}
