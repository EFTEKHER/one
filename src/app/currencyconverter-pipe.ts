import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconverter',
})
export class CurrencyconverterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 121.5; // Example conversion rate from USD to BDT
  }

}
