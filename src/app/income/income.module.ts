import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { INCOME_ROUTES } from './income.routes';
import { IncomeComponent } from './income.component';

@NgModule({
  declarations: [
    IncomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(INCOME_ROUTES)
  ]
})
export class IncomeModule { }
