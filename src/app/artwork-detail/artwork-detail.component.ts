import {  OnInit,Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtWorkService } from '../Services/art-work.service';
import { FinalArtwork } from '../model/final-artwork';



@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.scss']
})



export class ArtworkDetailComponent{

  Data: FinalArtwork['data'] | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private artworkService: ArtWorkService,

  ) {

    let prodId = this.activeRoute.snapshot.params['id'];
    console.log(prodId)
    this.fetchDetailArtworks(prodId)
  }

 

  fetchDetailArtworks(id:number){
    const artdata= this.artworkService.fetchDetailArtworks(id.toString()).subscribe((data) =>{
      console.log(data);
      this.Data=data.data
    })

  }
  addtoFav(artwork:FinalArtwork['data']){

    this.artworkService.addtoFav(artwork);
    
    
      }
}
