import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AndriiComponent } from './components/andrii.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BabiiService } from './services/babii.service';
import { LundiakService } from './services/lundiak.service';

@NgModule({
  declarations: [
    AppComponent,
    AndriiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    LundiakService,
    BabiiService,
    // {
    //   provide: BabiiService, useFactory: (a: any) => {
    //     console.log(a);
    //   }
    // },
    // { provide: LundiakService, useValue: 'dummy' },
    // { provide: BabiiService, useValue: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
