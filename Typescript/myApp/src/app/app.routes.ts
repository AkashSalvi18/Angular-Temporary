import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './account/profile/profile.component';
import { PasswordComponent } from './account/password/password.component';
 
export const routes: Routes = [
    {path:'' ,component: HomeComponent},
    {path:'product/:id' ,component: ProductComponent},
    {path:'category' ,component: CategoryComponent},
    {path:'account' ,component: AccountComponent,children:[
        {path:'profile',component:ProfileComponent},
        {path:'password',component:PasswordComponent},
    ]},
    {path:'notfound' ,component: NotfoundComponent},
    {path:'**' ,redirectTo:'notfound' },
];