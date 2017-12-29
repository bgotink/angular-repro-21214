import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OtherModule } from './other.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OtherModule.forStrings('first', 'second', 'third')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
