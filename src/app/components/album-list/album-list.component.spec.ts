
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumListComponent } from './album-list.component';
import { ImageService } from '../../services/image.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlbumItemComponent } from "../album-item/album-item.component";
import { of } from 'rxjs';
import {Album} from "../../models/album.model";

const mockAlbums:Album[] =  [{
  "userId": 1,
  "id": 1,
  "title": "quidem molestiae enim"
},
  {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "omnis laborum odio"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "non esse culpa molestiae omnis sed optio"
  }]

describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;
  let imageService: ImageService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  ],
      imports: [
        HttpClientTestingModule,
        AlbumItemComponent
      ],
      providers: [ ImageService ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    imageService = TestBed.inject(ImageService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load albums on init', () => {

    spyOn(imageService, 'getAlbums').and.returnValue(of(mockAlbums));

    component.ngOnInit();

    expect(component.albums).toEqual(mockAlbums);
  });

  it('should call loadAlbums method on init', () => {
    spyOn(component, 'loadAlbums');

    component.ngOnInit();

    expect(component.loadAlbums).toHaveBeenCalled();
  });

  it('should set albums property with data from imageService', () => {

    spyOn(imageService, 'getAlbums').and.returnValue(of(mockAlbums));

    component.loadAlbums();

    expect(component.albums).toEqual(mockAlbums);
  });
});
