import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './components/dashboard/products/store/products.reducer';
import { ProductEffect } from './components/dashboard/products/store/product.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/dashboard/products/card/card.component';
import { AddProductComponent } from './components/dashboard/products/add-product/add-product.component';
import { reducer } from './components/store/reducer';
import { EditProductsComponent } from './components/dashboard/products/edit-products/edit-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    RegisterComponent,
    CardComponent,
    AddProductComponent,
    EditProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      productView: reducer,
      product: productReducer,
    }),
    EffectsModule.forRoot([ProductEffect]),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
