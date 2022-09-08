import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherpropositionpreconfirmeComponent } from './afficherpropositionpreconfirme.component';

describe('AfficherpropositionpreconfirmeComponent', () => {
  let component: AfficherpropositionpreconfirmeComponent;
  let fixture: ComponentFixture<AfficherpropositionpreconfirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherpropositionpreconfirmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherpropositionpreconfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
