// archivo: series.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesService } from './series.service';

@NgModule({
  declarations: [
    SeriesListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SeriesService
  ],
  exports: [
    SeriesListComponent
  ]
})
export class SeriesModule { }
