import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainheaderComponent } from './main.component';

describe('MainheaderComponent', () => {
  let component: MainheaderComponent;
  let fixture: ComponentFixture<MainheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainheaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
