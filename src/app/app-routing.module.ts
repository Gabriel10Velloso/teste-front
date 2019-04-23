import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
    {path: 'ecommerce', component: EcommerceComponent},
    {path: '**', redirectTo: '/ecommerce'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
