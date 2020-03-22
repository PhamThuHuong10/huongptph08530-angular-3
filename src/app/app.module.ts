import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import  {FormsModule} from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { ProducListComponent } from './product-list/product-list.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducListComponent,
    SliderComponent,
    CategoryComponent,
    ProductComponent,
    ProductAddComponent,
    ProductTableComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
