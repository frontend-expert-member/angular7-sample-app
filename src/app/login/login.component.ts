import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        console.log(JSON.stringify(this.loginForm.value));
    }

    onCancel() {
        this.submitted = false;
    }
}