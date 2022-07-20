import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  // path to our main page
  {
    path: "main",
    component: MainComponent,
  },
  // route  to our github users details page
  {
    path: "user/:id",
    component: DetailsComponent,
  },
  { path: '', redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
