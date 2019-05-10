import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import{ ReactiveFormsModule, FormsModule } from'@angular/forms';
import{ HttpClientModule } from'@angular/common/http';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


