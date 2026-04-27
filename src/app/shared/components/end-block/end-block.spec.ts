import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndBlock } from './end-block';

describe('EndBlock', () => {
  let component: EndBlock;
  let fixture: ComponentFixture<EndBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
