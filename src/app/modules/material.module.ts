import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
