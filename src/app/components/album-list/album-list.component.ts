import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import {AlbumItemComponent} from "../album-item/album-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  imports: [
    AlbumItemComponent,
    NgForOf
  ],
  standalone: true,
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: any[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.imageService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }
}
