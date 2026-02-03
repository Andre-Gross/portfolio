import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoxParagraphComponent } from './project-box-paragraph.component';

describe('ProjectBoxParagraphComponent', () => {
  let component: ProjectBoxParagraphComponent;
  let fixture: ComponentFixture<ProjectBoxParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBoxParagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBoxParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
