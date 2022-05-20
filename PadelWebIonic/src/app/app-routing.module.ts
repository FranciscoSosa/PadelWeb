import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserStatisticsComponent } from "./main-user/user-statistics/user-statistics.component";
import {MainUserPage} from "./main-user/main-user.page";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main-user/statistics',
    pathMatch: 'full'
  },
  {
    path: 'main-user',
    loadChildren: () => import('./main-user/main-user.module').then(m => m.MainUserModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
