import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherpropositionconfirmeComponent } from './afficherpropositionconfirme.component';

describe('AfficherpropositionconfirmeComponent', () => {
  let component: AfficherpropositionconfirmeComponent;
  let fixture: ComponentFixture<AfficherpropositionconfirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherpropositionconfirmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherpropositionconfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
