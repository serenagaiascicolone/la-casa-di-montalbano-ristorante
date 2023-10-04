import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzeriaComponent } from './pages/pizzeria/pizzeria.component';
import { RistoranteComponent } from './pages/ristorante/ristorante.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'menu-pizzeria',
    component: PizzeriaComponent,
  },
  {
    path: 'menu-ristorante',
    component: RistoranteComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
