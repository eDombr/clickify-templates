import { ResetPasswordRenderComponent } from './reset-password-render/reset-password-render.component';
import { DeleteRenderComponent } from './delete-render/delete-render.component';
import { Component, OnInit } from '@angular/core';
import { StubEditorComponent } from './stub-editor/stub-editor.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  public settings: any = {
    filter: false,
    edit: {
      editButtonContent: '<i class="fas fa-pencil-alt"></i>',
      saveButtonContent: '<i class="fas fa-save"></i>',
      cancelButtonContent: '<i class="fas fa-ban"></i>',
      confirmSave: true,
    },
    actions: {
      columnTitle: '',
      add: false,
      delete: false,
    },
    columns: {
      // edit: {
      //   title: '',
      //   filter: false,
      // },
      name: {
        title: 'Name',
        filter: false,
      },
      company: {
        title: 'Company',
        filter: false,
      },
      number: {
        title: 'Number',
        filter: false,
      },
      email: {
        title: 'Email',
        filter: false,
      },
      resetPassword: {
        title: '',
        type: 'custom',
        renderComponent: ResetPasswordRenderComponent,
        filter: false,
        editor: {
          type: 'custom',
          component: StubEditorComponent
        }
      },
      delete: {
        title: '',
        type: 'custom',
        renderComponent: DeleteRenderComponent,
        filter: false,
        editor: {
          type: 'custom',
          component: StubEditorComponent
        }
      }
    }
  };

  data = [
    {
      name: 'Allie Moss',
      company: 'Daimler',
      number: '812-530-4177',
      email: 'herzog_brooklyn@davis.ca'
    },
    {
      name: 'Stella Chambers',
      company: 'General Motors',
      number: '657-946-5780',
      email: 'bailey_hand@yahoo.com'
    },
    {
      name: 'Sara Lee',
      company: 'Berkshire',
      number: '413-697-0278',
      email: 'marvin_jerel@medhurst.tv'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
