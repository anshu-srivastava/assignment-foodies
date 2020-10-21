import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProductActions from '../dashboard/products/store/product.action';
import * as fromProduct from '../dashboard/products/store/products.reducer';
import { Product } from './products/store/product.model';

import { CustomBtnElement } from '../../lit-element/button-element';
console.assert(CustomBtnElement !== undefined);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  id: number;
  products: any;
  products$: Observable<Product[]>;
  showAddProductPopUp: boolean;
  addProductFormView: any;
  editProductFormView: any;

  constructor(private store: Store<any>) {
    this.getProducts();
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.addProductFormView = state.productView.addProductFormView;
      this.editProductFormView = state.productView.editProductFormView;
      console.log(this.addProductFormView);
      console.log(this.editProductFormView);
    });
  }

  addProductPopUp(value): void {
    this.showAddProductPopUp = value;
  }

  hideAddProductPopUp(value): void{
    this.showAddProductPopUp = value;
  }

  getProducts(): void {
    this.store.dispatch(new ProductActions.LoadProducts());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
  }

  editProduct(id): void {
    this.id = id;
  }
}
