import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchSectionArea } from './switch-section-area';

describe('SwitchSectionArea', () => {
  let component: SwitchSectionArea;
  let fixture: ComponentFixture<SwitchSectionArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchSectionArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchSectionArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
