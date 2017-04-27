import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms/forms';
import { InputTextModule } from 'primeng/primeng';

export class CustomValidators {
    static username(control: AbstractControl) {
        const value = control.value;

        if (value) {
            return /\s/.test(value) ? { invalidUserName: true } : null;
        }
    }

    static unique(control: AbstractControl) {
        return new Promise(resolve => {
            setTimeout(() => resolve(null), 3000);
        })
    }

    static between(min: number, max: number): ValidatorFn {
        return (control: FormControl) => {
            if (control.value > min && control.value < max) {
                return null;
            }
            return { inRange: false };
        }
    }

}
