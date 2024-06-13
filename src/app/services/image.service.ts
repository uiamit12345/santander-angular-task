import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Photo} from "../models/photo.model";
import {Album} from "../models/album.model";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  albumsUrl = 'https://jsonplaceholder.typicode.com/albums'; // Replace with actual API
  photosUrl = 'https://jsonplaceholder.typicode.com/photos'; // Replace with actual API

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl);
  }
}
