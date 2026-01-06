import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log(args)
    let [data]= args;

    if(args.length>0)
      {
        return value * data;
      }
      else{
        return value * 121.5;
      } // Example conversion rate from USD to BDT
  }

}
