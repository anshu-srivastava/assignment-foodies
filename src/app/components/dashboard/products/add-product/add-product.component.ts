import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/product.action';
import * as FoodieProductActions from '../../../store/action';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() mode;
  hidePopup: boolean;
  constructor(private store: Store<any>) {}

  addProductForm = new FormGroup({
    heading: new FormControl(),
    description: new FormControl(),
    imageUrl: new FormControl(),
    id: new FormControl(),
  });

  ngOnInit(): void {}
  addProduct(): void {
    this.store.dispatch(
      new ProductActions.CreateProduct(this.addProductForm.value)
    );
    this.store.dispatch(new FoodieProductActions.HideAddProductAction());
  }

  Cancel(): void {
    this.store.dispatch(new FoodieProductActions.HideAddProductAction());
  }
}
