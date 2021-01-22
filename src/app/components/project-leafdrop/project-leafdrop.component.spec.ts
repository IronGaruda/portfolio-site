import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLeafdropComponent } from './project-leafdrop.component';

describe('ProjectLeafdropComponent', () => {
  let component: ProjectLeafdropComponent;
  let fixture: ComponentFixture<ProjectLeafdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLeafdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLeafdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
