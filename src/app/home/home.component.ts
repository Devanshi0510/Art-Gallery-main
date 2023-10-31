import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtWorkService } from '../Services/art-work.service';
import { Artwork } from '../model/artwork';
import { SharedService } from '../Services/shared.service';
import { FinalArtwork } from '../model/final-artwork';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // searchedArtworks: Artwork[] = [];
  finalArtworks:any[]=[]
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(private artWorkService: ArtWorkService, private sharedService: SharedService) {
   
  }

ngOnInit(){
  this.fetchArtworks()
}

  
fetchArtworks(){

  const artdata= this.artWorkService.fetchArtworksAll().subscribe((data) =>{
    console.log(data);
    console.log(data.data);
    this.finalArtworks=data.data
    console.log(this.finalArtworks[0])
    return(this.finalArtworks)
    this.paginator.length = this.finalArtworks.length;
    // this.Data=data.data
  })

this.artWorkService.fetchArtworksAll()

// this.finalArtworks= 
// console.log(this.finalArtworks)
}


addtoFav(artwork:FinalArtwork['data']){

  this.artWorkService.addtoFav(artwork);
  
  
    }

}
