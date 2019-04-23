import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from './material/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { InMemoryDataService } from './shared/data/data';
import { AddEditEcommerceComponent } from './add-edit-ecommerce/add-edit-ecommerce.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    AddEditEcommerceComponent
  ],
  entryComponents: [EcommerceComponent, AddEditEcommerceComponent], // Angular Modal
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MyOwnCustomMaterialModule,
    ToastNotificationsModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
