import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestirbuttonComponent } from './investirbutton.component';

describe('InvestirbuttonComponent', () => {
  let component: InvestirbuttonComponent;
  let fixture: ComponentFixture<InvestirbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestirbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestirbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
