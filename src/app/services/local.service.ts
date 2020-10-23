import { Injectable } from '@angular/core';
import i18next from 'i18next';
import * as localization from '../../assets/localization-en.json';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(){
    i18next.init(
      {
        lng: 'en',
        debug: true,
        resources: {
          en: {
            translation: localization,
          },
        },
      },
      (err, t) => {
        // initialized and ready to go!
        // document.getElementById('output').innerHTML = i18next.t('key');
        console.log(i18next);
      }
    );
  }

  // tslint:disable-next-line: typedef
  getLocalText(key?: string) {
    return key !== undefined ? i18next.t(key) : '';
  }

  getCurrencyText(value): string {
    return '$' + value;
  }
}
