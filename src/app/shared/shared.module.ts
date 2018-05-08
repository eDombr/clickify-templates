import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    Ng2SmartTableModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [ FlexLayoutModule, Ng2SmartTableModule, NavbarComponent ]
})
export class SharedModule { }
