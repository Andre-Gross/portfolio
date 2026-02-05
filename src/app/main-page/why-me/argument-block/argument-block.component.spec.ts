import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgumentBlock } from './argument-block.component';

describe('ArgumentBlock', () => {
  let component: ArgumentBlock;
  let fixture: ComponentFixture<ArgumentBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArgumentBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgumentBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
