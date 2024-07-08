import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'keyboard', loadChildren: () => import('./keyboard/keyboard.module').then(m => m.KeyboardModule) },
  { path: '', redirectTo: '/keyboard/keycap', pathMatch: 'full' } // Ruta por defecto opcional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
