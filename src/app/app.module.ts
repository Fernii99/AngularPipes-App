import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Locale app Configuration
import localeEsES  from '@angular/common/locales/es-EA';
import localeFrCA  from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsES );
registerLocaleData( localeFrCA );

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-EA'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
