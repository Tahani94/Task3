import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurent/add-restaurent.component';
import { UpdateRestaurantComponent } from './update-restaurent/update-restaurent.component';
import { ListRestaurantComponent } from './list-restaurent/list-restaurent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: AddRestaurantComponent, path: 'add' },
  { component: UpdateRestaurantComponent, path: 'update/:id' },
  { component: ListRestaurantComponent, path: 'list' },
  { component: LoginComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
