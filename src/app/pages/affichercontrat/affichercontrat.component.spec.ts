import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichercontratComponent } from './affichercontrat.component';

describe('AffichercontratComponent', () => {
  let component: AffichercontratComponent;
  let fixture: ComponentFixture<AffichercontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichercontratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichercontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
