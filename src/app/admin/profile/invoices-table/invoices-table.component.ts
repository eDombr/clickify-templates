import { DeleteLocationRenderComponent } from './../delete-location-render/delete-location-render.component';
import { Component, OnInit } from '@angular/core';
import { StubEditorComponent } from '../../manage-users/stub-editor/stub-editor.component';

@Component({
  selector: 'app-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.scss']
})
export class InvoicesTableComponent implements OnInit {
  public settings: any = {
    filter: false,
    actions: {
      columnTitle: '',
      add: false,
      delete: false,
      edit: false
    },
    columns: {
      date: {
        title: 'Date',
        filter: false,
      },
      ammount: {
        title: 'Ammount',
        filter: false,
      },
      product: {
        title: 'Product',
        filter: false,
      },
    }
  };

  public data: any = [
    {
      date: '01 February',
      ammount: '$53',
      product: 'Subscription',
    },
    {
      date: '22 January',
      ammount: '$123',
      product: 'Subscription',
    },
    {
      date: '08 March',
      ammount: '$33',
      product: 'Subscription',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
