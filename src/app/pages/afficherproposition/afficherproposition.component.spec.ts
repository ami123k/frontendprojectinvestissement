import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherpropositionComponent } from './afficherproposition.component';

describe('AfficherpropositionComponent', () => {
  let component: AfficherpropositionComponent;
  let fixture: ComponentFixture<AfficherpropositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherpropositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherpropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
