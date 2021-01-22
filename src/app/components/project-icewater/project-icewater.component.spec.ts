import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIcewaterComponent } from './project-icewater.component';

describe('ProjectIcewaterComponent', () => {
  let component: ProjectIcewaterComponent;
  let fixture: ComponentFixture<ProjectIcewaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectIcewaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectIcewaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
