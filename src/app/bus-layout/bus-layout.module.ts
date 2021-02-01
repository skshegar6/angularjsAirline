import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  declarations: [LayoutComponent],
  exports:[LayoutComponent]
  
})
export class BusLayoutModule { }
