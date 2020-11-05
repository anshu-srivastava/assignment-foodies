import { Action } from '@ngrx/store';

export const SHOW_ADD_PRODUCT = 'SHOW_ADD_PRODUCT';
export const HIDE_ADD_PRODUCT = 'HIDE_ADD_PRODUCT';
export const SHOW_EDIT_PRODUCT = 'SHOW_EDIT_PRODUCT';
export const HIDE_EDIT_PRODUCT = 'HIDE_EDIT_PRODUCT';


export class ShowAddProductAction implements Action {
 readonly type = SHOW_ADD_PRODUCT;

 constructor() { }
}

export class HideAddProductAction implements Action {
  readonly type = HIDE_ADD_PRODUCT;

  constructor() { }
}
export class ShowEditProductAction implements Action {
 readonly type = SHOW_EDIT_PRODUCT;

 constructor() { }
}

export class HideEditProductAction implements Action {
  readonly type = HIDE_EDIT_PRODUCT;

  constructor() { }
}

export type Actions
  =
  | ShowAddProductAction
  | HideAddProductAction
  | ShowEditProductAction
  | HideEditProductAction;
