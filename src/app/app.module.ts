import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './Shared Module/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchBarComponent } from './Shared Module/search-bar/search-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { ArtworkCardComponent } from './artwork-card/artwork-card.component';
import { FavArtComponent } from './fav-art/fav-art.component';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    SearchResultComponent,
    ArtworkCardComponent,
    FavArtComponent,
    ArtworkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
