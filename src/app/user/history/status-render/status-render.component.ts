import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-render',
  templateUrl: './status-render.component.html',
  styleUrls: ['./status-render.component.css']
})
export class StatusRenderComponent implements OnInit {
  public status: string;

  @Input() public rowData;

  constructor() { }

  ngOnInit() {
    this.status = `../assets/img/${this.rowData.status}.png`;
  }

}
