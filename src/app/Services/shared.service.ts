import { Injectable } from '@angular/core';
import { Artwork } from '../model/artwork';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  searchedArtworks: Artwork[] = [];
  FavArtworks:any;
  constructor() { }
}
