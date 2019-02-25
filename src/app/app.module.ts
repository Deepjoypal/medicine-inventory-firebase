import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatProgressSpinnerModule
  , MatPaginatorModule, MatToolbarModule
  , MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { MedicineEntryComponent } from './medicine-entry/medicine-entry.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'new',
    component: MedicineEntryComponent
  },
  /*{
    path: 'stock/:symbol',
    component: StockDetailsComponent
  },
  {
    path: 'stock/:symbol/:year',
    component: StockDetailsComponent
  },
  {
      path: 'stock',
      component: StockDetailsComponent
  },*/
  {
      path: '**',
      component: NotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MedicineListComponent,
    NavBarComponent,
    NotFoundComponent,
    SearchComponent,
    MedicineEntryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
