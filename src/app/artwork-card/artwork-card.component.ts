import { Component,Input, SimpleChanges } from '@angular/core';
import { FinalArtwork } from '../model/final-artwork';
import { ArtWorkService } from '../Services/art-work.service';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent {
  @Input() artworkData: FinalArtwork | undefined
  
constructor( private artworkservice: ArtWorkService){

}


  ngOnChanges(changes: SimpleChanges) {
    if (changes['artworkData'] && this.artworkData) {
      console.log(this.artworkData);
    }
  }

  addtoFav(artwork:FinalArtwork['data']){

this.artworkservice.addtoFav(artwork);


  }
}