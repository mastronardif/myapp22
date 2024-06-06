import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // If the value is null or undefined, return it as is

    let result = '';
    let capitalize = true;

    for (let i = 0; i < value.length; i++) {
      const char = value.charAt(i);
      result += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return result;
  }

}
