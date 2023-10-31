import { Component } from '@angular/core';
import { ArtWorkService } from 'src/app/Services/art-work.service';
import { Artwork } from 'src/app/model/artwork';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
 
  query: string ='';
  artworks: Artwork[] = [];

  constructor(private artworkService: ArtWorkService,private router: Router, private sharedService: SharedService) { }
  search() {
   
    console.log('Query:', this.query); 
    this.artworkService.searchArtworks(this.query)
      .subscribe(
        (artworks: Artwork[]) => {
          this.artworks = artworks;
          console.log("hey")
          console.log(this.artworks);
          this.sharedService.searchedArtworks = this.artworks;
          this.router.navigate(['/search-result'], { queryParams: { q: this.query } });
        }
      );
      console.log("hey2")
  }
  // goToComponent() {
  //   this.router.navigate(['/search-result']);
  // }


}
