import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HistoryComponent } from './history/history.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UserRoutingModule } from './user-routing.module';
import { StatusRenderComponent } from './history/status-render/status-render.component';
import { VoicemailRenderComponent } from './history/voicemail-render/voicemail-render.component';
import { DeleteContactRenderComponent } from './contacts/delete-contact-render/delete-contact-render.component';
import { EditContactRenderComponent } from './contacts/edit-contact-render/edit-contact-render.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [
    UserComponent,
    ProfileComponent,
    StatisticsComponent,
    HistoryComponent,
    ContactsComponent,
    StatusRenderComponent,
    VoicemailRenderComponent,
    DeleteContactRenderComponent,
    EditContactRenderComponent
  ],
  entryComponents: [
    StatusRenderComponent,
    VoicemailRenderComponent,
    DeleteContactRenderComponent,
    EditContactRenderComponent
  ]
})
export class UserModule { }
