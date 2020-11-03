import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as ProductActions from '../productsStore/product.action';
import * as fromProduct from '../productsStore/products.reducer';
import { Observable } from 'rxjs';
import * as editProductActions from '../../../appStore/action';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss'],
})
export class EditProductsComponent implements OnInit {
  @Input() id;
  constructor(private store: Store<any>) {}

  editProductForm = new FormGroup({
    heading: new FormControl(),
    description: new FormControl(),
    imageUrl: new FormControl(),
    id: new FormControl(),
  });

  ngOnInit(): void {
    this.getProductById(this.id);
  }

  getProductById(id): void {
    this.store.dispatch(new ProductActions.LoadProduct(id));
    const product$: Observable<any> = this.store.pipe(
      select(fromProduct.getProductById)
      );
    product$.subscribe((formData) => {
    if (formData) {
        this.editProductForm.patchValue(formData);
      }
    });
  }

  editProduct(): void {
    this.store.dispatch(new ProductActions.UpdateProduct(this.editProductForm.value));
    this.store.dispatch(new editProductActions.HideEditProductAction());
  }

  Cancel(): void {
    this.store.dispatch(new editProductActions.HideEditProductAction());
  }
}
