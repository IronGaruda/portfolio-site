import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUsedcarComponent } from './project-usedcar.component';

describe('ProjectUsedcarComponent', () => {
  let component: ProjectUsedcarComponent;
  let fixture: ComponentFixture<ProjectUsedcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUsedcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUsedcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
