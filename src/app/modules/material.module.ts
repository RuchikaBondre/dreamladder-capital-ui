import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
