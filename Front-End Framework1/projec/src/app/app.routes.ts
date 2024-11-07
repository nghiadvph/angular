
import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { adminGuard } from './admin.guard';
import { ListComponent } from './pages/about/list/list.component';
import { ProductAddComponent } from './pages/about/product-add/product-add.component';
import { AdminComponent } from './layouts/admin/admin.component';
export const routes: Routes = [
    {path:"", component:ClientLayoutComponent,
        children:[
            {path:"", component:HomepageComponent},
            {path:"product-detail/:id", component:ProductDetailComponent},
            {path:"register", component:RegisterComponent},
            {path:"login", component:LoginComponent},
        ]
    },
    {path:"admin", component:AdminComponent , canActivate:[adminGuard],children:[
        {path:"product-list", component: ListComponent},
        {path:"product-add", component: ProductAddComponent}
        ]},
];      
