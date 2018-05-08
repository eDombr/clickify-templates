import { AdminComponent } from './admin/admin.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'verify-code', component: VerifyCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
