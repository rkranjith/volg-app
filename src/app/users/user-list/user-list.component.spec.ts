import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import { HttpClientModule } from '@angular/common/http';

import { UserListComponent } from './user-list.component';
import { UserListAction } from './user-list.actions';

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ UserListComponent ],
        imports : [
            RouterModule.forRoot([]),
            HttpClientModule,
            NgReduxTestingModule
        ],
        providers : [
            { provide: APP_BASE_HREF, useValue : '/' },
            UserListAction
        ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
