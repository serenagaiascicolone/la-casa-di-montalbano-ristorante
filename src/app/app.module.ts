import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PizzeriaComponent } from './pages/pizzeria/pizzeria.component';
import { RistoranteComponent } from './pages/ristorante/ristorante.component';
import { HeroComponent } from './components/hero/hero.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    PizzeriaComponent,
    RistoranteComponent,
    HeroComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
