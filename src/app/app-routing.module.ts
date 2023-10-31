import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Shared Module/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './Shared Module/search-bar/search-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FavArtComponent } from './fav-art/fav-art.component';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';

const routes: Routes = [

  {
    path:"navbar",
    component: NavbarComponent
  },
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"search-bar",
    component: SearchBarComponent
  },
  {
    path:"search-result",
    component: SearchResultComponent
  },
  {
    path:"fav-art",
    component: FavArtComponent
  }
  ,
  {
    path:"artwork-detail/:id",
    component: ArtworkDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
