import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { NewsComponent } from './Views/news/news.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'news', component: NewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, NewsComponent];
