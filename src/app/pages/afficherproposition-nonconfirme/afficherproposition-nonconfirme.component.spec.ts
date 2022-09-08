import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherpropositionNonconfirmeComponent } from './afficherproposition-nonconfirme.component';

describe('AfficherpropositionNonconfirmeComponent', () => {
  let component: AfficherpropositionNonconfirmeComponent;
  let fixture: ComponentFixture<AfficherpropositionNonconfirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherpropositionNonconfirmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherpropositionNonconfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
