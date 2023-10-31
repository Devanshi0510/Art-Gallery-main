import { Component } from '@angular/core';
import { ArtWorkService } from '../Services/art-work.service';
import { Artwork } from '../model/artwork';
import { SharedService } from '../Services/shared.service';
import { FinalArtwork } from '../model/final-artwork';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  // allartworks: Artwork[] = [];
  searchedArtworks: Artwork[] = [];
  finalArtworks:FinalArtwork[]=[]
  constructor(private artWorkService: ArtWorkService, private sharedService: SharedService) {
    this.searchedArtworks = this.sharedService.searchedArtworks;
    this.fetchArtworks(this.searchedArtworks)
    console.log(this.searchedArtworks)
  }

fetchArtworks(searchedArtworks:Artwork[]){
this.finalArtworks= this.artWorkService.fetchArtworks(this.searchedArtworks)
console.log(this.finalArtworks)
}

}
