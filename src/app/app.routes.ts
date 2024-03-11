import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ApirestComponent} from "./components/apirest/apirest.component";
import {PadreComponent} from "./components/padre/padre.component";

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "comunicacion", component: PadreComponent},
    {path: "apirest", component: ApirestComponent},
    {path: "**", pathMatch: "full", redirectTo: "home"}
];

