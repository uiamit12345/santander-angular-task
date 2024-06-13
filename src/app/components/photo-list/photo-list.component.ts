import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from '../../services/image.service';
import {PhotoItemComponent} from "../photo-item/photo-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  imports: [
    PhotoItemComponent,
    NgForOf
  ],
  standalone: true,
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: any[] = [];
  albumId!: number;

  constructor(private route: ActivatedRoute, private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.loadPhotos();
    });
  }

  loadPhotos(): void {
    this.imageService.getPhotos().subscribe(data => {
      this.photos = data.filter(photo => photo.albumId === this.albumId);
    });
  }
}
