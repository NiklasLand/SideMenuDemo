import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';


import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { NewsComponent } from './Views/news/news.component';
import { NewsMiniComponent } from './components/news-mini/news-mini.component';
import {CardModule} from 'primeng/card';
import {ToggleButtonModule} from 'primeng/togglebutton';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routingComponents,
    NewsComponent,
    NewsMiniComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenuModule,
    CardModule,
    ToggleButtonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
