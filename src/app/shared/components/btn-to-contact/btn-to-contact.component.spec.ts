import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnToContactComponent } from './btn-to-contact.component';

describe('BtnToContactComponent', () => {
  let component: BtnToContactComponent;
  let fixture: ComponentFixture<BtnToContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnToContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnToContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
