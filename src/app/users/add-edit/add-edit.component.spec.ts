import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { UserAddEditComponent } from './add-edit.component';

describe('UserAddEditComponent', () => {
    let component: UserAddEditComponent;
    let fixture: ComponentFixture<UserAddEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ UserAddEditComponent ],
        imports  : [
            RouterModule.forRoot([]),
            NgReduxTestingModule,
            ReactiveFormsModule
        ],
        providers : [
            { provide: APP_BASE_HREF, useValue : '/' }
        ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAddEditComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should parseDate', () => {
        expect(component.parseDate('20-09-2006')).toEqual('2006-09-20');
    });

    it('should formatDate', () => {
        expect(component.formatDate('1981-08-24')).toEqual('24-08-1981');
    });
});
