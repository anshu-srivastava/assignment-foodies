import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProductActions from '../dashboard/products/productsStore/product.action';
import * as fromProduct from '../dashboard/products/productsStore/products.reducer';
import { Product } from './products/productsStore/product.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  id: number;
  products: any;
  showAddProductPopUp: boolean;
  addProductFormView: any;
  editProductFormView: any;
  products$: Observable<Product[]>;

  constructor(private store: Store<any>) {
    this.getProducts();
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.addProductFormView = state.productView.addProductFormView;
      this.editProductFormView = state.productView.editProductFormView;
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
