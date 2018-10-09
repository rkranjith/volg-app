import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class UsersService {

    constructor(private http: Http) { }

    getUsers() {
        const path = 'users.json';
        return this.http.get(environment.apiUrl + path)
            .map(res => res.json());
    }

}
