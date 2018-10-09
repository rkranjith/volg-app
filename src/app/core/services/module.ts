import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UsersService } from './users.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    exports: [],
    providers: [
        UsersService
    ],
    declarations: []
})

export class ServiceModule { }
