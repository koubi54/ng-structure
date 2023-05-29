import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'contact', loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
