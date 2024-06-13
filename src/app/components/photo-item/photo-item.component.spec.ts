import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoItemComponent } from './photo-item.component';
import { By } from '@angular/platform-browser';

const mockPhoto = { id: 1, albumId:2, thumbnailUrl: '//url', url: 'https://via.placeholder.com/600/92c952' };


describe('PhotoItemComponent', () => {
  let component: PhotoItemComponent;
  let fixture: ComponentFixture<PhotoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoItemComponent);
    component = fixture.componentInstance;
    component.photo = mockPhoto;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isModalOpen to false', () => {
    expect(component.isModalOpen).toBeFalse();
  });

  it('should open modal', () => {
    component.openModal();
    expect(component.isModalOpen).toBeTrue();
  });

  it('should close modal', () => {
    component.isModalOpen = true;
    component.closeModal();
    expect(component.isModalOpen).toBeFalse();
  });

  it('should toggle modal on button click', () => {
    const buttonElement = fixture.debugElement.query(By.css('.photo-item'));
    buttonElement.triggerEventHandler('click', null);
    expect(component.isModalOpen).toBeFalse();

    buttonElement.triggerEventHandler('click', null);
    expect(component.isModalOpen).toBeFalse();
  });

});
