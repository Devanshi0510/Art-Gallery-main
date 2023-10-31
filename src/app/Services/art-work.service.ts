import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Artwork } from '../model/artwork';
import { map, tap } from 'rxjs/operators';
import { FinalArtwork } from '../model/final-artwork';


@Injectable({
  providedIn: 'root'
})




export class ArtWorkService {

  query: string ='';
  artworks: Artwork[] = [];

  constructor(private http: HttpClient) { }

  searchArtworks(query: string): Observable<Artwork[]> {
    console.log(query)
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${query}`;
  
    return this.http.get<{ data: Artwork[] }>(url)
      .pipe(
        map(response => response.data),
        tap((artworks: Artwork[]) => {
          this.artworks = artworks;
          console.log(this.artworks[0].api_link);
        })
      );
  }

  fetchArtworks(searchArtworks: Artwork[]) {
    const fetchedArtworks: any[] = [];
    searchArtworks.forEach((artwork) => {
      this.http.get(artwork.api_link)
        .pipe(map((res) => {
          fetchedArtworks.push(res);
        }))
        .subscribe();
    });
    return fetchedArtworks;
  }

  fetchDetailArtworks(id:string):Observable<any> {
    const fetchedArtworks: any = [];

     return  this.http.get('https://api.artic.edu/api/v1/artworks/'+id)
    //     .subscribe();
    // return fetchedArtworks;
  }


  fetchArtworksAll():Observable<any>{
    const fetchedArtworks: any = [];

    return  this.http.get('https://api.artic.edu/api/v1/artworks?page=2&limit=100')

    //  return  
    // this.http.get('https://api.artic.edu/api/v1/artworks')
    // .pipe(map((res) => {
    //   fetchedArtworks.push(res);
    // }))
    // .subscribe();

    // console.log(fetchedArtworks)
     
    //  this.fetchArtworks= this.http.get<any>('')
    // //     .subscribe();
    // // return fetchedArtworks;
  }


addtoFav(artwork:FinalArtwork['data']){

  const favData = JSON.parse(localStorage.getItem('favData') || '{}');

  if (favData[artwork.id]) {
    alert(`${artwork.title} already in favourites!`);
  } else {
 
    favData[artwork.id] = artwork;
    localStorage.setItem('favData', JSON.stringify(favData));
    let item=localStorage.getItem('favData')
    console.log(item)
    alert(`${artwork.title} added to favourites!`);
  }

}


}