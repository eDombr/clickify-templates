import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AlocateNumbersComponent } from './alocate-numbers/alocate-numbers.component';
import { GroupNumbersComponent } from './group-numbers/group-numbers.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SharedModule } from '../shared/shared.module';
import { DeleteRenderComponent } from './manage-users/delete-render/delete-render.component';
import { ResetPasswordRenderComponent } from './manage-users/reset-password-render/reset-password-render.component';
import { StubEditorComponent } from './manage-users/stub-editor/stub-editor.component';
import { CreateUserComponent } from './manage-users/create-user/create-user.component';
import { ProfileComponent } from './profile/profile.component';
import { EditLocationRenderComponent } from './profile/edit-location-render/edit-location-render.component';
import { DeleteLocationRenderComponent } from './profile/delete-location-render/delete-location-render.component';
import { InvoicesTableComponent } from './profile/invoices-table/invoices-table.component';
import { ServicesUsingTableComponent } from './profile/services-using-table/services-using-table.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    AlocateNumbersComponent,
    GroupNumbersComponent,
    ManageUsersComponent,
    DeleteRenderComponent,
    ResetPasswordRenderComponent,
    StubEditorComponent,
    CreateUserComponent,
    ProfileComponent,
    EditLocationRenderComponent,
    DeleteLocationRenderComponent,
    InvoicesTableComponent,
    ServicesUsingTableComponent
  ],
  entryComponents: [
    DeleteRenderComponent,
    ResetPasswordRenderComponent,
    StubEditorComponent,
    EditLocationRenderComponent,
    DeleteLocationRenderComponent
  ]
})
export class AdminModule { }
