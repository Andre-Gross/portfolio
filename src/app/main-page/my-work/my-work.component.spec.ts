import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkSection } from './my-work.component';

describe('MyWorkSection', () => {
  let component: MyWorkSection;
  let fixture: ComponentFixture<MyWorkSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWorkSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWorkSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
