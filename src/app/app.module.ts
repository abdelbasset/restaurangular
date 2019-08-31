import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

import { RouterModule, Routes, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { ScheduleComponent } from './schedule/schedule.component'

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { DishTableComponent } from './dish-table/dish-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule, MatFormFieldModule, MatNativeDateModule, MAT_DATE_LOCALE, MatSelectModule} from '@angular/material';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'reserve', component: ReserveComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'contact', component: ContactComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    MainDashComponent,
    DishTableComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
