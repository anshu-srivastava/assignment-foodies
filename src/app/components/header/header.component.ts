import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import * as ProductActions from '../store/action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() addProductView = new EventEmitter<any>();
  theme = 'SetTheme';
  showAddProductView: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private themeService: ThemeService,
    private store: Store<any>
  ) {
    this.themeService.isDarkTheme();
  }

  ngOnInit(): void {}

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

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
