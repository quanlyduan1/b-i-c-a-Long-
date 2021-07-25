import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTravelComponent } from './about-travel/about-travel.component';
import { AppComponent } from './app.component';
import { CmtTravelComponent } from './cmt-travel/cmt-travel.component';
import { DetailsTravelComponent } from './details-travel/details-travel.component';
import { HomeTravelComponent } from './home-travel/home-travel.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared';
import { SignupComponent } from './signup/signup.component';
import { UploadAccountComponent } from './upload-account/upload-account.component';

const products =() => import('./layout/layout.module').then(x => x.LayoutModule);
const routes: Routes = [
    {path:'hometravel',component:HomeTravelComponent},
    {path:'abouttravel',component:AboutTravelComponent},
    {path:'commenttravel',component:CmtTravelComponent},
    {path:'detailstravel/:id',component:DetailsTravelComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'layout',loadChildren : products},
    
    // {path:'dashboard',component:DashboardComponent},
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'error',
        loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
    },
    {
        path: 'access-denied',
        loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
    },
    { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
