import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabledataComponent } from './tabledata/tabledata.component'
import {AppComponent} from "./app.component"
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component"
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: 'tabularView', component: TabledataComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
