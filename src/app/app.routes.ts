import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Login } from './login/login';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profiless } from './profiless/profiless';
import { User } from './user/user';
export const routes: Routes = [
    {path:'login',component:Login},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'',component:Home},
    {path:'profile',component:Profiless,data:{name:"Eftekher Ali Efte"}},
    {path:'user/:id',component:User},
    {path:'**',component:PageNotFound}

];
