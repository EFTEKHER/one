import { Component } from '@angular/core';
import { RouterLink ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-profiless',
  imports: [RouterLink],
  templateUrl: './profiless.html',
  styleUrl: './profiless.css',
})
export class Profiless {
  userName:string| null='';
constructor(
  private route:ActivatedRoute
){

}
// ngOnInit():void{
//   // let name=this.route.snapshot.paramMap.get('name');
//   // console.log('Name parameter:', name);
//   // this.userName=name;
//   this.route.queryParams.subscribe(params=>{
//     this.userName=params['name'];
//     console.log('Name parameter from queryParams:',this.userName);
//   });
// }
ngOnInit()
{
  this.route.data.subscribe(data=>{
    console.log(data)
    console.log(data['name'])
    this.userName=data['name']
  })
}

}
