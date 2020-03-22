import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProducListComponent } from './product-list/product-list.component';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path : '', redirectTo: 'slider', pathMatch: 'full'},
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-manage', component: ProductTableComponent },
  {path: 'product/:id', component: ProductComponent},
  { path: 'product-edit/:id', component: ProductComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'product-list', component: ProducListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
