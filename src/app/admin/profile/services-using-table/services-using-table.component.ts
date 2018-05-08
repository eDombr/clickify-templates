import { DeleteLocationRenderComponent } from './../delete-location-render/delete-location-render.component';
import { Component, OnInit } from '@angular/core';
import { StubEditorComponent } from '../../manage-users/stub-editor/stub-editor.component';

@Component({
  selector: 'app-services-using-table',
  templateUrl: './services-using-table.component.html',
  styleUrls: ['./services-using-table.component.scss']
})
export class ServicesUsingTableComponent implements OnInit {
  public settings: any = {
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
      service: {
        title: 'Service',
        filter: false,
      },
      price: {
        title: 'Price Per Month',
        filter: false,
      },
      delete: {
        title: '',
        type: 'custom',
        renderComponent: DeleteLocationRenderComponent,
        filter: false,
      }
    }
  };

  data = [
    {
      service: 'number: 494-605-5575',
      price: '$23',
    },
    {
      service: 'number: 234-646-8632',
      price: '$57',
    },
    {
      service: 'number: 494-605-5575',
      price: '$23',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
