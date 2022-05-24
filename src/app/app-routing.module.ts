import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { SearchMyPantryComponent } from './components/search-my-pantry/search-my-pantry.component';

const routes: Routes = [
  // { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'users', component: UserListComponent },
  { path: 'login', component: AddUserComponent},
  { path: 'detail/:id', component: DetailComponent},
  { path: 'add', component: AddRecipeComponent},
  { path: 'search/my-pantry', component: SearchMyPantryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
