import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'view/:id', component: ViewComponent},
  { path: '**', component: PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
