import { DeleteLocationRenderComponent } from './delete-location-render/delete-location-render.component';
import { EditLocationRenderComponent } from './edit-location-render/edit-location-render.component';
import { ResetPasswordRenderComponent } from './../manage-users/reset-password-render/reset-password-render.component';
import { DeleteRenderComponent } from './../manage-users/delete-render/delete-render.component';
import { StubEditorComponent } from './../manage-users/stub-editor/stub-editor.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public locationsSettings: any = {
    filter: false,
    actions: {
      columnTitle: '',
      add: false,
      delete: false,
      edit: false
    },
    columns: {
      // edit: {
      //   title: '',
      //   filter: false,
      // },
      country: {
        title: 'Country',
        filter: false,
      },
      city: {
        title: 'City',
        filter: false,
      },
      building: {
        title: 'Building',
        filter: false,
      },
      postCode: {
        title: 'Post Code',
        filter: false,
      },
      edit: {
        title: '',
        type: 'custom',
        renderComponent: EditLocationRenderComponent,
        filter: false,
        editor: {
          type: 'custom',
          component: StubEditorComponent
        }
      },
      delete: {
        title: '',
        type: 'custom',
        renderComponent: DeleteLocationRenderComponent,
        filter: false,
        editor: {
          type: 'custom',
          component: StubEditorComponent
        }
      }
    }
  };

  locationsData = [
    {
      country: 'Belarus',
      city: 'Minsk',
      building: '324',
      postCode: '345234'
    },
    {
      country: 'Litva',
      city: 'Klaypeda',
      building: '123',
      postCode: '777777'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
