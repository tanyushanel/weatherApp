import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
})
export class TempConverterPipe implements PipeTransform {
  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        return value.toFixed(0);
      }
      if (unit === 'F') {
        return (value * 1.8 + 32).toFixed(0);
      }
    }
    return value;
  }
}
