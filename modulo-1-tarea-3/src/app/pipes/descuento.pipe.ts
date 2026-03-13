import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
  standalone: true
})
export class DescuentoPipe implements PipeTransform {
  transform(valor: number, porcentaje: number = 10): number {
    if (valor == null) return 0;
    return valor - (valor * porcentaje / 100);
  }
}