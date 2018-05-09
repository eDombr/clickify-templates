import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voicemail-render',
  templateUrl: './voicemail-render.component.html',
  styleUrls: ['./voicemail-render.component.css']
})
export class VoicemailRenderComponent implements OnInit {
  public isVoicemail = false;
  @Input() public rowData;

  constructor() { }

  ngOnInit() {
    if (this.rowData.voicemail) {
      this.isVoicemail = true;
    }
  }

}
