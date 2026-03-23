import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitPrint } from './permit-print.component';

describe('PermitPrint', () => {
  let component: PermitPrint;
  let fixture: ComponentFixture<PermitPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermitPrint],
    }).compileComponents();

    fixture = TestBed.createComponent(PermitPrint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
