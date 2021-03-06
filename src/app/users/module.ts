import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { UserAddEditComponent } from './add-edit/add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    declarations: [
       UserListComponent,
       UserAddEditComponent
    ],
    exports: [
        UserListComponent,
    ]
})

export class UsersModule { }
