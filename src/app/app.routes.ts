import { Routes } from '@angular/router';
import {
  AlbumListComponent
} from "./components/album-list/album-list.component";
import {
  PhotoListComponent
} from "./components/photo-list/photo-list.component";

export const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumListComponent },
  { path: 'albums/:id/photos', component: PhotoListComponent }
];
