import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';

import { FlipCardBackComponent } from './flip-card-back';
import { FlipCardFrontComponent } from './flip-card-front';



@NgModule({
  declarations: [
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ]
})
export class FlipCardModule { }
