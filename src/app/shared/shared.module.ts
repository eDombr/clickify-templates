import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    Ng2SmartTableModule
  ],
  declarations: [],
  exports: [ FlexLayoutModule, Ng2SmartTableModule ]
})
export class SharedModule { }
