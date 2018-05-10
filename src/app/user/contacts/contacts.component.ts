import { EditContactRenderComponent } from './edit-contact-render/edit-contact-render.component';
import { DeleteContactRenderComponent } from './delete-contact-render/delete-contact-render.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public settings: any = {
    filter: false,
    actions: {
      columnTitle: '',
      add: false,
      delete: false,
      edit: false
    },
    columns: {
      name: {
        title: 'Name',
        filter: false,
      },
      home: {
        title: 'Home',
        filter: false,
      },
      work: {
        title: 'Work',
        filter: false,
      },
      personal: {
        title: 'Personal',
        filter: false,
      },
      edit: {
        title: '',
        type: 'custom',
        renderComponent: EditContactRenderComponent,
        filter: false,
      },
      delete: {
        title: '',
        type: 'custom',
        renderComponent: DeleteContactRenderComponent,
        filter: false,
      },
    }
  };

  data = [
    {
      name: 'Allie Moss',
      home: '123-234-3454',
      work: '812-530-4177',
      personal: '867-534-8756'
    },
    {
      name: 'Allie Moss',
      home: '123-234-3454',
      work: '812-530-4177',
      personal: '867-534-8756'
    },
    {
      name: 'Allie Moss',
      home: '123-234-3454',
      work: '812-530-4177',
      personal: '867-534-8756'
    },
    {
      name: 'Allie Moss',
      home: '123-234-3454',
      work: '812-530-4177',
      personal: '867-534-8756'
    },
    {
      name: 'Allie Moss',
      home: '123-234-3454',
      work: '812-530-4177',
      personal: '867-534-8756'
    },
    {
      name: 'Allie Moss',
      home: '123-234-3454',
      work: '812-530-4177',
      personal: '867-534-8756'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
