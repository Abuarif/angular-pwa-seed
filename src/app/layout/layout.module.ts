import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { UserinfoComponent } from './header/userinfo/userinfo.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [LayoutComponent, HeaderComponent, MenuComponent, UserinfoComponent],
  exports: [LayoutComponent, HeaderComponent, MenuComponent]
})
export class LayoutModule { }
