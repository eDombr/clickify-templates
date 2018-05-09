import { StatusRenderComponent } from './status-render/status-render.component';
import { Component, OnInit } from '@angular/core';
import { VoicemailRenderComponent } from './voicemail-render/voicemail-render.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
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
        title: '',
        filter: false,
      },
      number: {
        title: '',
        filter: false,
      },
      date: {
        title: '',
        filter: false,
      },
      status: {
        title: '',
        type: 'custom',
        renderComponent: StatusRenderComponent,
        filter: false,
      },
      voicemail: {
        title: '',
        type: 'custom',
        renderComponent: VoicemailRenderComponent,
        filter: false,
      }
    }
  };

  data = [
    {
      name: 'Allie Moss',
      number: '812-530-4177',
      date: 'today 6:56 PM',
      status: 'missed',
      voicemail: ''
    },
    {
      name: 'Allie Moss',
      number: '812-530-4177',
      date: 'today 6:56 PM',
      status: 'received',
      voicemail: 'sdfsdf'
    },
    {
      name: 'Allie Moss',
      number: '812-530-4177',
      date: 'today 6:56 PM',
      status: 'received',
      voicemail: ''
    },
    {
      name: 'Allie Moss',
      number: '812-530-4177',
      date: 'today 6:56 PM',
      status: 'received',
      voicemail: 'sdfsdf'
    },
    {
      name: 'Allie Moss',
      number: '812-530-4177',
      date: 'today 6:56 PM',
      status: 'missed',
      voicemail: ''
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
