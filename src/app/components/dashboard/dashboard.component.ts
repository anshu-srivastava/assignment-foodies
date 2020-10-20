import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CustomBtnElement } from '../../lit-element/button-element';
import { Observable } from 'rxjs';
import * as ProductActions from '../dashboard/products/store/product.action';
import * as fromProduct from '../dashboard/products/store/products.reducer';
import { Product } from './products/store/product.model';

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

  constructor(
    private store: Store<any>
  ) {
    this.getProducts();
  }

  ngOnInit(): void {

  }

  getProducts(): void {
    this.store.dispatch(new ProductActions.LoadProducts());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
  }

  editItem(id): void {
    this.id = id;
  }
}
