import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AlbumItemComponent} from './album-item.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {Album} from "../../models/album.model";

const mockAlbum:Album = {
  userId: 1,
  id: 1,
  title: "quidem molestiae enim"
}

describe('AlbumItemComponent', () => {
  let component: AlbumItemComponent;
  let fixture: ComponentFixture<AlbumItemComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumItemComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    component.album = mockAlbum;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind album input', () => {
    fixture.detectChanges();

    const albumTitleElement = fixture.debugElement.query(By.css('.album-item'));
    expect(albumTitleElement.nativeElement.textContent).toContain('Album 1');
  });

  it('should navigate to photos when navigateToPhotos is called', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.navigateToPhotos();

    expect(navigateSpy).toHaveBeenCalledWith(['/albums', 1, 'photos']);
  });

  it('should call navigateToPhotos on click', () => {
    const navigateSpy = spyOn(component, 'navigateToPhotos');

    fixture.detectChanges();

    const albumItemElement = fixture.debugElement.query(By.css('.album-item'));
    albumItemElement.triggerEventHandler('click', null);

    expect(navigateSpy).toHaveBeenCalled();
  });
});
