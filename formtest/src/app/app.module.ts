import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from "ng-apexcharts";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatingRoleComponent } from './creating-role/creating-role.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoleradarchartComponent } from './roleradarchart/roleradarchart.component';
import { MemberComponent } from './member/member.component';
import { SigninComponent } from './signin/signin.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatingRoleComponent,
    RoleradarchartComponent,
    MemberComponent,
    SigninComponent,
    HerosComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgApexchartsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
