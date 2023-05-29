import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { GotoComponent } from './goto/goto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent,
    children: [
      { path: 'goto', component: GotoComponent },
    ] }
];


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    GotoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class HomeModule { }
