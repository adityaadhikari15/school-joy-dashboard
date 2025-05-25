import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardGraduationTableComponent, DashboardGraduationTrackComponent, DashboardNavbarComponent } from './components';
import { DashboardLayoutComponent } from './pages';
import { DashboardRoutes } from './dashboard.routing';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

const components = [DashboardNavbarComponent, DashboardGraduationTrackComponent, DashboardGraduationTableComponent];
const pages = [DashboardLayoutComponent];

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    NgChartsModule,
    FormsModule
  ],
  declarations: [...components, ...pages]
})
export class DashboardModule { }
