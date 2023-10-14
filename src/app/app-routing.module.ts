import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzeriaComponent } from './pages/pizzeria/pizzeria.component';
import { RistoranteComponent } from './pages/ristorante/ristorante.component';
import { HomeComponent } from './pages/home/home.component';

import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DoveSiamoComponent } from './pages/dove-siamo/dove-siamo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
  {
    path: 'contatti',
    component: ContactComponent,
  },
  {
    path: 'dove-siamo',
    component: DoveSiamoComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
exports: [RouterModule]
})
export class AppRoutingModule { }
