import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMyProjetComponent } from './afficher-my-projet.component';

describe('AfficherMyProjetComponent', () => {
  let component: AfficherMyProjetComponent;
  let fixture: ComponentFixture<AfficherMyProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherMyProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherMyProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
