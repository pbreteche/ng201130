import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { ContactCreateComponent } from './contact-form/contact-create.component';
import { RoutingModule } from './routing/routing.module';
import { ContactEditComponent } from './contact-form/contact-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleValidatorDirective } from './simple-validator.directive';
import { ChoiceValidatorDirective } from './choice-validator.directive';
import { AgencyPipe } from './agency.pipe';
import {AGENCIES, AGENCIES_TOKEN} from './agency.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactNavComponent,
    ContactCreateComponent,
    ContactEditComponent,
    SimpleValidatorDirective,
    ChoiceValidatorDirective,
    AgencyPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: AGENCIES_TOKEN, useValue: AGENCIES },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
