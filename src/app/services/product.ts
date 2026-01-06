import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {

constructor()
{
  console.log('Product service is called');
}
getProductData(){
  return[
    {name:'mobile',branch:'samsung',price:'20,000'},
    {name:'laptop',branch:'dell',price:'30,000'},
    {name:'washing-machine', branch:'samsung',price:'10,000'}
  ]
}
}
