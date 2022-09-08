import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMypropositionbyProjetComponent } from './afficher-mypropositionby-projet.component';

describe('AfficherMypropositionbyProjetComponent', () => {
  let component: AfficherMypropositionbyProjetComponent;
  let fixture: ComponentFixture<AfficherMypropositionbyProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherMypropositionbyProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherMypropositionbyProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
