import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let imageService: jasmine.SpyObj<ImageService>;

  beforeEach(async () => {
    const imageServiceSpy = jasmine.createSpyObj('ImageService', ['getPhotos']);
    const activatedRouteStub = {
      params: of({ id: 1 })
    };

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule],
      providers: [
        { provide: ImageService, useValue: imageServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    imageService = TestBed.inject(ImageService) as jasmine.SpyObj<ImageService>;

    imageService.getPhotos.and.returnValue(of([
      { id: 1, albumId: 1, title: 'Photo 1', url: 'url1', thumbnailUrl: 'thumb1' },
      { id: 2, albumId: 2, title: 'Photo 2', url: 'url2', thumbnailUrl: 'thumb2' },
      { id: 3, albumId: 1, title: 'Photo 3', url: 'url3', thumbnailUrl: 'thumb3' }
    ]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set albumId from route params', () => {
    expect(component.albumId).toBe(1);
  });

  it('should load and filter photos by albumId', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.photos.length).toBe(2);
    expect(component.photos[0].id).toBe(1);
    expect(component.photos[1].id).toBe(3);
  });

  it('should display the filtered photos', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();

    const photoItems = fixture.debugElement.queryAll(By.css('app-photo-item'));
    expect(photoItems.length).toBe(2);
  }));
});
