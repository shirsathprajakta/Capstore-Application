import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword')
    if (newPassword.pristine || confirmPassword.pristine) {
        return null;
    }
    return newPassword && confirmPassword && newPassword.value !== confirmPassword.value ? { 'misMatch': true } : null;

}

export function AddUserPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword')
    if (password.pristine || confirmPassword.pristine) {
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ? { 'misMatch': true } : null;

}

export function AlternatePhoneValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const phoneNo = control.get('phoneNo');
    const alternatePhoneNo = control.get('alternatePhoneNo')
    if (phoneNo.pristine || alternatePhoneNo.pristine) {
        return null;
    }
    return phoneNo && alternatePhoneNo && phoneNo.value == alternatePhoneNo.value ? { 'phoneMatch': true } : null;

}

export function AlternateEmailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const username = control.get('username');
    const alternateEmail = control.get('alternateEmail')
    if (username.pristine || alternateEmail.pristine) {
        return null;
    }
    return username && alternateEmail && username.value == alternateEmail.value ? { 'emailMatch': true } : null;

}