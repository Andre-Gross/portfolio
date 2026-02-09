import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArgument } from './single-argument.component';

describe('SingleArgument', () => {
  let component: SingleArgument;
  let fixture: ComponentFixture<SingleArgument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleArgument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleArgument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
