import { ProfileComponent } from './profile/profile.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { GroupNumbersComponent } from './group-numbers/group-numbers.component';
import { AdminComponent } from './admin.component';
import { AlocateNumbersComponent } from './alocate-numbers/alocate-numbers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './manage-users/create-user/create-user.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'alocate-numbers', component: AlocateNumbersComponent },
      { path: 'group-numbers', component: GroupNumbersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'manage-users/create', component: CreateUserComponent },
      { path: 'manage-users', component: ManageUsersComponent },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
