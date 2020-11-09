import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../productsStore/product.action';
import * as productEditActions from '../../../appStore/action';
import { CustomImgElement } from 'src/app/lit-element/img-element';
import { CustomCardElement } from 'src/app/lit-element/card-element';
import { CustomCardHeaderElement } from 'src/app/lit-element/card-header-element';
import { CustomCardFooterElement } from 'src/app/lit-element/card-footer-element';
console.assert(CustomImgElement !== undefined);
console.assert(CustomCardElement !== undefined);
console.assert(CustomCardHeaderElement !== undefined);
console.assert(CustomCardFooterElement !== undefined);
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() newItemEventId = new EventEmitter<any>();
  @Input() product;

  constructor(private store: Store<any>) {
  }

  deleteProduct(id): void{
    this.store.dispatch(new ProductActions.DeleteProduct(id));
  }
  edit(id): void {
    this.newItemEventId.emit(id);
    this.store.dispatch(new productEditActions.ShowEditProductAction());
  }
}
