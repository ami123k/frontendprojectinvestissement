import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPropositionComponent } from './ajouter-proposition.component';

describe('AjouterPropositionComponent', () => {
  let component: AjouterPropositionComponent;
  let fixture: ComponentFixture<AjouterPropositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPropositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
