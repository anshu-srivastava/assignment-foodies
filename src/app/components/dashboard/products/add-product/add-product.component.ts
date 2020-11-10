import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../productsStore/product.action';
import * as FoodieProductActions from '../../../appStore/action';
import { CustomInputElement } from 'src/app/lit-element/input-element';
import { CustomTextareaElement } from 'src/app/lit-element/textarea-element';

console.assert(CustomInputElement !== undefined);
console.assert(CustomTextareaElement !== undefined);
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() mode;
  hidePopup: boolean;
  constructor(private store: Store<any>) {
    setTimeout(() => {
      this.setFocus();
    }, 500);
  }

  addProductForm = new FormGroup({
    heading: new FormControl(),
    description: new FormControl(),
    imageUrl: new FormControl(),
  });

  ngOnInit(): void {}
  public addProduct(): void {
    this.store.dispatch(
      new ProductActions.CreateProduct(this.addProductForm.value)
    );
    this.store.dispatch(new FoodieProductActions.HideAddProductAction());
  }

  public Cancel(): void {
    this.store.dispatch(new FoodieProductActions.HideAddProductAction());
    window.scrollTo(0, 0);
  }

  setFocus(): void {
    const test = document.getElementById('addProduct');
    if (test) {
      test.focus();
    }
  }

  onHeadingClick(event): void {
    this.addProductForm.controls.heading.setValue(event);
  }

  onDescriptionClick(event): void {
    this.addProductForm.controls.description.setValue(event);
  }

  onImgClick(event): void {
    this.addProductForm.controls.imageUrl.setValue(event);
  }
}
