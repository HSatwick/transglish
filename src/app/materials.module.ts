import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
      MatButtonModule,
      MatTabsModule,
      MatCardModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      MatChipsModule,
      MatIconModule
  ],
  exports: [
      MatButtonModule,
      MatTabsModule,
      MatCardModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      MatChipsModule,
      MatIconModule
  ]
})
export class MaterialModule { }
