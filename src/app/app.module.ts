import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './components/count/count.component';
import { ButtonComponent } from './components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { countReduer } from './components/state/counter.reduecer';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: countReduer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
