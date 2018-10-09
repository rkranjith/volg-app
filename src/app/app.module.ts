import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { StoreModule } from './store/module';
import { ServiceModule } from './core/services/module';

import { UsersModule } from './users/module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        NgReduxModule,
        NgReduxRouterModule,
        ReactiveFormsModule,
        HttpModule,
        StoreModule,
        ServiceModule,
        UsersModule
    ],
    providers: [
        {
            provide : LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
