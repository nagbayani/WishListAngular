/*
  Custom Validators for Email Domain on Reactive Form
*/
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createInvalidDomainValidator(hosts: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // if has value, converted to lowercase
    const value = control.value?.toLowerCase();

    if (!value) {
      return null;
    }

    // if there is a match in hosts array -> return null for that value
    const matches = hosts.some((host) => value.indexOf(`@${host}`) > -1);

    return matches ? { invalidEmailDomain: true } : null;
  };
}
