import { Routes, RouterModule } from "@angular/router";
import { DashboardLayoutComponent } from "./pages";

const routes: Routes = [
  {
    path: "",
    component: DashboardLayoutComponent,
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
