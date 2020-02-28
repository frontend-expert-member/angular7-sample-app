"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormComponent = (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', forms_1.Validators.required]
        });
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "getForm", {
        get: function () { return this.registerForm; },
        enumerable: true,
        configurable: true
    });
    /*checkPasswords(group: FormGroup) {
        let pass = group.controls.password.value;
        let confirmPass = group.controls.confirmPassword.value;

        return pass === confirmPass ? null : { notSame: true }
    }*/
    FormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        selector: 'form-app',
        templateUrl: './form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map