// src/app/components/album-item/album-item.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  standalone: true,
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent {
  @Input() album: any;

  constructor(private router: Router) { }

  navigateToPhotos(): void {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
