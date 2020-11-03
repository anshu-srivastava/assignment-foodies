import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import * as ProductActions from '../appStore/action';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() addProductView = new EventEmitter<any>();
  theme = 'SetTheme';
  showAddProductView: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private themeService: ThemeService,
    private translateService: TranslateService,
    private store: Store<any>
  ) {
    this.translateService.addLangs(['en', 'fr']);
    this.translateService.setDefaultLang('en');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    this.themeService.isDarkTheme();
  }

  setTheme(): void {
    if (this.themeService.isDarkTheme()) {
      this.theme = 'light Theme';
    } else {
      this.theme = 'Dark theme';
    }
  }

  changeTheme(): void {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    this.setTheme();
  }

  addProduct(): void {
    this.store.dispatch(new ProductActions.ShowAddProductAction());
  }

  changeLanguage(): void {
    const currenLang = this.translateService.currentLang;
    if (currenLang === 'en') {
      this.translateService.use('fr');
    } else {
      this.translateService.use('en');
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
