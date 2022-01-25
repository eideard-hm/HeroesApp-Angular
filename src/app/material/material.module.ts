import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
  ]
})
export class MaterialModule { }
