import {AbstractControl, ValidatorFn} from "@angular/forms";

export function ForbiddenNameValidator(forbiddenName: RegExp[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    const forbidden = forbiddenName.some(forbiddenName => forbiddenName.test(control.value))

    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  }
}
