import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';

import { AppModel } from 'store/model';
import { Users, User } from 'users/model';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {

    public addEditUserForm: FormGroup;
    public form: any = {
        valid: false,
        submitted: false,
        isEdit: false,
        index: null,
    };
    public user: User;

    constructor(
        private location: Location,
        private formBuilder: FormBuilder,
        private cdr: ChangeDetectorRef,
        private route: ActivatedRoute,
        private ngRedux: NgRedux<AppModel>
    ) { }

    ngOnInit() {
        this.initPage();
    }

    private initPage() {
        this.addEditUserForm = this.initForm();
        this.route.params.subscribe((params) => {
            const i = params.id;
            this.form.index = i;

            this.user = this.getUser(i);
            if (!this.user) {
                return;
            }
            this.form.isEdit = true;
            this.prepareEdit();
        });
    }

    private initForm(): FormGroup {
        return this.formBuilder.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
            surname: ['', Validators.required],
            birthdate: ['', Validators.required],
            phone: ['', [Validators.required, Validators.minLength(8),
                Validators.maxLength(10)]],
            city: ['', Validators.required],
            street: ['', Validators.required],
            number: ['', Validators.required]
        });
    }

    public getUser(i): User {
        let users: User[];
        let user: User;
        users = this.getUsers();
        if (!(users && users.length)) {
            return user;
        }
        user = users[i];
        return user;
    }

    public getUsers(): User[] {
        return this.ngRedux.getState().users.items;
    }

    public parseDate(dateStr): string {
        const arr = dateStr.split('-');
        const obj = new Date(
            parseInt(arr[2]), parseInt(arr[1])-1, parseInt(arr[0])+1);
        return obj.toISOString().substring(0, 10);
    }

    public formatDate(dateObj): string {
        const d = new Date(dateObj);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return [day, month, year].join('-');
    }

    private prepareEdit(): void {
        this.addEditUserForm.patchValue({
            id: this.user.id,
            name: this.user.name,
            surname: this.user.surname,
            birthdate: this.parseDate(this.user.birthDate),
            phone: this.user.phone,
            city: this.user.city,
            street: this.user.street,
            number: this.user.number
        });
    }

    public getUserObject(): User {
        const userForm = this.addEditUserForm.value;
        const req: User = {
            id: userForm.id,
            name: userForm.name,
            surname: userForm.surname,
            birthDate: this.formatDate(userForm.birthdate),
            phone: userForm.phone,
            city: userForm.city,
            street: userForm.street,
            number: userForm.number
        };

        return req;
    }

    public onSubmit(): void {
        this.form.submitted = true;
        this.form.valid = this.addEditUserForm.valid;

        if (!this.form.valid) {
            return;
        }
        this.saveUser();
    }

    public saveUser(): void {
        const obj = this.getUserObject();

        let users = this.getUsers();
        if (this.form.isEdit) {
            users[this.form.index] = obj;
            alert('User updated!');
        } else {
            users.push(obj);
            alert('User saved!');
        }
        this.goBack();
    }

    public goBack(): void {
        this.location.back();
    }
}
