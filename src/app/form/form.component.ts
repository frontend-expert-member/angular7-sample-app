import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'form-app',
    templateUrl: './form.component.html'
})

export class FormComponent {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        });
    }

    get f() { return this.registerForm.controls; }

    get getForm() { return this.registerForm; }

    /*checkPasswords(group: FormGroup) {
        let pass = group.controls.password.value;
        let confirmPass = group.controls.confirmPassword.value;

        return pass === confirmPass ? null : { notSame: true }
    }*/

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    }
}