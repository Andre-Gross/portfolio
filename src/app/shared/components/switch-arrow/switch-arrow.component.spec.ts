import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchArrowComponent } from './switch-arrow.component';

describe('SwitchArrowComponent', () => {
  let component: SwitchArrowComponent;
  let fixture: ComponentFixture<SwitchArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
