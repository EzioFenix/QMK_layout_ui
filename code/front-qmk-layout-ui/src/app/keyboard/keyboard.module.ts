import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycapComponent } from './keycap/keycap.component';
import { KeyboardRoutingModule } from './keyboard-routing.module';

@NgModule({
  declarations: [KeycapComponent],
  imports: [
    CommonModule,
    KeyboardRoutingModule
  ]
})
export class KeyboardModule { }
