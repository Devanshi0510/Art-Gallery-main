import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavArtComponent } from './fav-art.component';

describe('FavArtComponent', () => {
  let component: FavArtComponent;
  let fixture: ComponentFixture<FavArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavArtComponent]
    });
    fixture = TestBed.createComponent(FavArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
