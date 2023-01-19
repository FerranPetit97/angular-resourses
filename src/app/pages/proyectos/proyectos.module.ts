import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { ProyectosRoutingModule } from './proyectos-routing.module';

import { ProyectosComponent } from './proyectos.component';

import { CommonModule } from '@angular/common';

import { CalculatorComponent } from '../../components/calculator/calculator.component';

@NgModule({
  imports: [
    NzButtonModule,
    FormsModule,
    ProyectosRoutingModule,
    CommonModule,
    NzTabsModule,
  ],
  declarations: [ProyectosComponent, CalculatorComponent],
  exports: [ProyectosComponent],
})
export class ProyectosModule {}