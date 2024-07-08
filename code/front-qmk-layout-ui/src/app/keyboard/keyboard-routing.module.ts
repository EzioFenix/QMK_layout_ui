import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycapComponent } from './keycap/keycap.component';

const routes: Routes = [
  { path: 'keycap', component: KeycapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyboardRoutingModule { }
