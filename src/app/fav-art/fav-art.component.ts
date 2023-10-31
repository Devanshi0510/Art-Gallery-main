import { OnInit,Component } from '@angular/core';
import { ArtWorkService } from '../Services/art-work.service';
import { FinalArtwork } from '../model/final-artwork';


interface FavouritesData {
    [artworkId: string]: FinalArtwork['data'];
  }
@Component({
  selector: 'app-fav-art',
  templateUrl: './fav-art.component.html',
  styleUrls: ['./fav-art.component.scss']
})

export class FavArtComponent implements OnInit {

favData: FavouritesData = {};
constructor(private arkworkService:ArtWorkService){

}

object = Object;
ngOnInit(){
  this.displayFavArt()
}

displayFavArt()
{
  const favData = JSON.parse(localStorage.getItem('favData') || '{}');
  console.log(favData)
  this.favData = favData;
}


removeFromFav(id:number){
  delete this.favData[id];
  localStorage.setItem('favData', JSON.stringify(this.favData));
}
}
