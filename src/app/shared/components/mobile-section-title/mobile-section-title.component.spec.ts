import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSectionTitleComponent } from './mobile-section-title.component';

describe('MobileSectionTitleComponent', () => {
  let component: MobileSectionTitleComponent;
  let fixture: ComponentFixture<MobileSectionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSectionTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
