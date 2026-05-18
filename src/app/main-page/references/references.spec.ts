import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesSection } from './references';

describe('References', () => {
  let component: ReferencesSection;
  let fixture: ComponentFixture<ReferencesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
