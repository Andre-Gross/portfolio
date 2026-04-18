import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillSet } from './my-skill-set';

describe('MySkillSet', () => {
  let component: MySkillSet;
  let fixture: ComponentFixture<MySkillSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySkillSet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySkillSet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
