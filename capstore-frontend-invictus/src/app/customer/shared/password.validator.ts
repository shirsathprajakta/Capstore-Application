import { AbstractControl } from "@angular/forms";

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