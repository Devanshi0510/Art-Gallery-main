import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkDetailComponent } from './artwork-detail.component';

describe('ArtworkDetailComponent', () => {
  let component: ArtworkDetailComponent;
  let fixture: ComponentFixture<ArtworkDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkDetailComponent]
    });
    fixture = TestBed.createComponent(ArtworkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
